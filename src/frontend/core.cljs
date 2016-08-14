(ns frontend.core
  (:require [goog.net.XhrIo :as xhr]
            [om.core :as om :include-macros true]
            [om.dom :as dom]))

(enable-console-print!)
(println "start")

(def app-state (atom {:text "foo"
                      :s3-keys []
                      :selected-image nil}))

(defn cycle-image []
  (swap! app-state update-in [:selected-image] #(str % "foo")))

(aset js/window "onclick" cycle-image)

(defn fetch-images [cb]
  (xhr/send "/imgs"
    (fn [event] 
      (println event)
      (let [res (-> event .-target .getResponseText)
            parsed (.parse window.JSON res)]
        (cb parsed)))))

(defn make-s3-url [k])

(defn root-component [data owner]
  (reify
    om/IRender
    (render [this]
      (println data)
      (if (:selected-image data)
        (dom/img #js {:src "http://wordsonwalls.nyc.s3.amazonaws.com/AMPLIFY%20LOVE%20DISSIPATE%20HATE.jpg" :width 300 :height 300} nil)
        (dom/h3 nil "loading..."))
      (dom/div nil (->> (:s3-keys data) (map (fn [x] (dom/h1 nil x))))))))

(om/root root-component app-state
  {:target (. js/document (getElementById "world"))})

(println "fetching image keys"
  (fetch-images 
    (fn [images] 
      (-> images
          (js->clj :keywordize-keys true)
          :Contents
          (->> (map :Key)
               (swap! app-state assoc :s3-keys))))))
