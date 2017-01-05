(ns pages.index
  (:require [clojure.string]
            [mirror.tools :as tools]
   #?(:cljs [goog.net.XhrIo :as xhr]))
 #?(:clj (:import [java.net.URLEncoder])))

#?(:cljs (enable-console-print!))

(defn initial-state [] 
  #?(:clj (do {:names (read-string 
                        (-> (slurp "pages/names.json")
                            (clojure.string/escape 
                              {\' "%27"
                               \? "%3F"})))})))

(def state 
  (tools/state-atom {}))

(defn fetch-images [cb]
  #?(:cljs 
     (xhr/send "/imgs"
      (fn [event]) 
      (println event)
      (let [res (-> event .-target .getResponseText)
            parsed (.parse window.JSON res)]
        (cb parsed)))))

(defn make-url [name]
  (str "http://wordsonwalls.nyc.s3.amazonaws.com/processed/" name))

(defn render []
  [:div
    [:div.w6.center.green
      {:on-click #(swap! state conj {:r (rand 100)})}
      [:h1 "WORDS ON WALLS!"]
      [:div
        (when (:names @state)
          (for [x (:names @state)]
            [:image {:src (make-url x) :key x}]))]]])

(tools/inject state #'render)

; #?(:cljs (println "SUP STATE" @state))
