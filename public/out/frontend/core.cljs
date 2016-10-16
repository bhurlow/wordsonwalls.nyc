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

(defn reload-all []
  (require 'frontend.core :reload))

(def app-state 
  (atom {:text "loading..."
         :hash "#"
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

;; ===== navigation 

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

(defn render-main [data]
  (case (:hash data)
    "#" (if (nil? (:selected-image data))
          (dom/img #js {:className "w-60 center db pointer" :src "/img/crystal_ball.jpeg"} nil)
          (render-image data))
    "#about" (dom/h1 nil "ABOUT PAGE")
    :else (dom/p nil "nope")))

(defn root-component [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "frame mw6 center"}
        (dom/h1 #js {:className "bg-black pl2 pt2 pb2 pr2 tc"} "WORDSONWALLS.nyc")
        ; (when (:loading? data)
        ;   (dom/div #js {:className "w-100 bg-black tc pt1 pb1 absolute "} (dom/p nil "~ LOADING IMAGE ~")))
        (render-main data)
        (dom/h3 #js {:className "bg-black pl2 pt2 pb2 pr2 tc"} (:text data))
        (dom/footer #js {:className (str "fixed bottom-1 w6 " (bg-style))}
          (dom/div #js {:className "w-100"}
            (dom/p #js {:className ""} (dom/a #js {:href "#about" :className "white"} "about wordsonwalls"))
            (dom/p #js {:className "f7"} "made by: Ken, Marcus, Brian")
            (dom/p nil "v0.3")))))))

(om/root root-component app-state
  {:target (. js/document (getElementById "world"))})

;; ===== setup

(defn init-images [])
  (fetch-images 
    (fn [images] 
      (-> images
          (js->clj :keywordize-keys true)
          (->> (swap! app-state assoc :s3-keys)))
      (swap! app-state assoc :text "Fortunes from the Streets to You")
      (aset js/window "onclick" cycle-image)))

(defn on-location-change [e]
  (println "location change"))

(defn init-location []
  (aset js/window "onbeforeunload" on-location-change)
  (let [hash (aget (aget js/window "location") "hash")
        hash (if (empty? hash) "#" hash)]
    (swap! app-state assoc :hash hash)))

(defn init []
  (init-location)
  (println "fetching image keys"))

;; ===== go!
(init)




