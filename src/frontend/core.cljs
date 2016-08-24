(ns frontend.core
  (:require [goog.net.XhrIo :as xhr]
            [om.core :as om :include-macros true]
            [om.dom :as dom]))

(enable-console-print!)
(println "APP START")

(def app-state (atom {:text "loading..."
                      :s3-keys []
                      :selected-image nil}))



;; ===== lib

(defn fetch-images [cb]
  (xhr/send "/imgs"
    (fn [event] 
      (println event)
      (let [res (-> event .-target .getResponseText)
            parsed (.parse window.JSON res)]
        (cb parsed)))))

(defn make-s3-url [k]
  ; (println (str "URI" (js/encodeURIComponent k)))
  (str "http://wordsonwalls.nyc.s3.amazonaws.com/" (js/encodeURIComponent k)))

(defn cycle-image []
  (swap! app-state assoc :text "loading...")
  (swap! app-state update-in [:selected-image] #(rand-nth (:s3-keys @app-state))))

;; ===== components

(defn root-component [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:class "frame"}
        (when (:text data) (dom/h1 nil (:text data)))
        (when (:selected-image data)
          (println "making seslected image url")
          (println (make-s3-url (:selected-image data)))
          (dom/div #js {:class "img-box"}
                   (dom/img #js {:src (make-s3-url (:selected-image data)) 
                                 :width  500
                                 :onLoad (swap! app-state assoc :text "nice!")
                                 :height 500}
                            nil))) 
        (dom/footer nil (dom/p nil "APP VERSION 0.1"))))))
                                 

        ; (dom/div nil (->> (:s3-keys data) (map (fn [x] (dom/h1 nil x)))))))))

(om/root root-component app-state
  {:target (. js/document (getElementById "world"))})

;; ===== go!

(println "fetching image keys")

(fetch-images 
  (fn [images] 
    (-> images
        (js->clj :keywordize-keys true)
        :Contents
        (->> (map :Key)
             (swap! app-state assoc :s3-keys)))
    (swap! app-state assoc :text "click to see an image")
    (aset js/window "onclick" cycle-image)))




