(ns frontend.core
  (:require [goog.net.XhrIo :as xhr]))

(enable-console-print!)

(js/alert "baz")

; (def app {})

; (xhr/send "/imgs"
;   (fn [event] (println event)
;     (let [res (-> event .-target .getResponseText)
;           parsed (.parse window.JSON res)]
;       (println parsed))))
