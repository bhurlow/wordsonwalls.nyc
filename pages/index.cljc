(ns pages.index
  (:require [clojure.string]
   #?(:cljs [goog.net.XhrIo :as xhr])))

(defn fetch-images [cb]
  #?(:cljs 
     (xhr/send "/imgs"
      (fn [event]) 
      (println event)
      (let [res (-> event .-target .getResponseText)
            parsed (.parse window.JSON res)]
        (cb parsed)))))

(defn render []
  [:h1 "YO WORLD"])
