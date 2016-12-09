(ns frontend.core
  (:require [goog.net.XhrIo :as xhr]
            [cljsjs.react]
            [om.core :as om :include-macros true]
            [om.dom :as dom]
            [clojure.browser.repl :as repl]))

; (defonce repl (atom nil))

; (if (nil? @repl)
;   (reset! repl
;     (repl/connect "http://localhost:9000/repl")))

(enable-console-print!)
(println "START")

; (defn reload-all []
;   (require 'frontend.core :reload))

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
  (-> (first (clojure.string/split k #"\."))
      (str)
      (clojure.string/replace "_" " ")))

;; ===== navigation 

;; ===== components

(defn bg-style []
  "bg-black pa2")

(defn render-image [data]
  (when (:selected-image data)
    (println "making seslected image url")
    (println (make-s3-url (:selected-image data)))
    (dom/div nil
      (dom/div #js {:class "img-box"}
             (dom/img #js {:src (make-s3-url (:selected-image data)) 
                           :width  500
                           :onLoad (do 
                                     (swap! app-state assoc :text (format-title (:selected-image data)))
                                     (swap! app-state assoc :loading? false))
                           :height 500}
                         nil))
      (dom/h3 #js {:className "bg-black pl2 pt2 pb2 pr2 tc"} (:text data)))))

(defn render-about [data]
  (dom/div #js {:className (bg-style)} 
    (dom/p nil "Photos by Ken Burns.")
    (dom/p nil "Direction by Marcus B. Flemming.")
    (dom/p nil "</web> by Brian Hurlow.")
    (dom/p nil "A website the showcases the wonderful variety of words written on walls in NYC.")))

(defn render-main [data]
  (case (:hash data)
    "#" (if (nil? (:selected-image data))
          (dom/img #js {:className "w-60 center db pointer" :src "/img/crystal_ball.jpeg"} nil)
          (render-image data))
    "#about" (render-about data)
    :else (dom/p nil "nope")))

(defn root-component [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "frame mw6 center"}
        (dom/a #js {:href "#" :className "white"} 
           (dom/h1 #js {:className "bg-black pl2 pt2 pb2 pr2 tc"} "WORDSONWALLS.NYC"))
        ; tbh
        ; (when (:loading? data)
        ;   (dom/div #js {:className "w-100 bg-black tc pt1 pb1 absolute "} (dom/p nil "~ LOADING IMAGE ~")))
        (render-main data)
        (dom/footer #js {:className (str "mt2 " (bg-style))}
          (dom/div #js {:className "w-100"}
            (dom/p #js {:className ""} (dom/a #js {:href "#about" :className "white"} "about wordsonwalls"))
            (dom/p #js {:className "f7"} "made by: Ken, Marcus, Brian")
            (dom/p nil "v0.4")))))))

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

(defn get-hash []
  (let [hash (aget (aget js/window "location") "hash")]
    (if (empty? hash) "#" hash)))

(defn on-location-change [e]
  (println "setting location" (get-hash))
  (swap! app-state assoc :hash (get-hash)))

(defn init-location []
  (aset js/window "onhashchange" on-location-change)
  (swap! app-state assoc :hash (get-hash)))

(defn init []
  (init-location)
  (println "fetching image keys"))

;; ===== go!
(init)




