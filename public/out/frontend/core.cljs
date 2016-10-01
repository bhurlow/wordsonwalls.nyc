(ns frontend.core
  (:require [goog.net.XhrIo :as xhr]
            [om.core :as om :include-macros true]
            [om.dom :as dom]
            [clojure.browser.repl :as repl]))

; (defonce repl (atom nil))

; (if (nil? @repl)
;   (reset! repl
;     (repl/connect "http://localhost:9000/repl")))

(enable-console-print!)

(println "APP START")

(defn reload-all []
  (require 'frontend.core :reload))

(def app-state 
  (atom {:text "loading..."
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
  (str "/s3image/" (js/encodeURIComponent k)))

(defn cycle-image []
  (swap! app-state assoc :text "loading...")
  (swap! app-state assoc :loading? true)
  (swap! app-state update-in [:selected-image] #(rand-nth (:s3-keys @app-state))))

(defn format-title [k]
  (str (first (clojure.string/split k #"\."))))

;; ===== components

(defn bg-style []
  "bg-black pa2")

(defn render-image [data]
  (when (:selected-image data)
    (println "making seslected image url")
    (println (make-s3-url (:selected-image data)))
    (dom/div #js {:class "img-box"}
             (dom/img #js {:src (make-s3-url (:selected-image data)) 
                           :width  500
                           :onLoad (do 
                                     (swap! app-state assoc :text (format-title (:selected-image data)))
                                     (swap! app-state assoc :loading? false))
                           :height 500}
                         nil))))

(defn root-component [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "frame mw6 center"}
        (dom/h1 #js {:className "bg-black pl2 pt2 pb2 pr2 tc"} "WORDSONWALLS.nyc")
        ; (when (:loading? data)
        ;   (dom/div #js {:className "w-100 bg-black tc pt1 pb1 absolute "} (dom/p nil "~ LOADING IMAGE ~")))
        (if (nil? (:selected-image data))
          (dom/img #js {:className "w-60 center db pointer" :src "/img/crystal_ball.jpeg"} nil)
          (render-image data))
        (dom/h3 #js {:className "bg-black pl2 pt2 pb2 pr2 tc"} (:text data))
        (dom/footer #js {:className (bg-style)}
          (dom/p nil "made by: Ken, Marcus, Brian")
          (dom/p nil "APP VERSION 0.3"))))))

(om/root root-component app-state
  {:target (. js/document (getElementById "world"))})

;; ===== go!

(println "fetching image keys")

(fetch-images 
  (fn [images] 
    (-> images
        (js->clj :keywordize-keys true)
        (->> (swap! app-state assoc :s3-keys)))
    (swap! app-state assoc :text "Fortunes from the Streets to You")
    (aset js/window "onclick" cycle-image)))




