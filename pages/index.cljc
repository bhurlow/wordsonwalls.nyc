(ns pages.index
  (:require [clojure.string]
            [mirror.tools :as tools]
   #?(:cljs [goog.net.XhrIo :as xhr]))
 #?(:clj (:import [java.net.URLEncoder])))

#?(:cljs (enable-console-print!))

;; TODO
;; mirror should escape this
(defn initial-state [] 
  #?(:clj (do {:names (read-string 
                        (-> (slurp "pages/names.json")
                            (clojure.string/escape 
                              {\' "%27"
                               \? "%3F"})))})))

(def state 
  (tools/state-atom {:visible-img 0
                     :names []}))

(defn fetch-images [cb]
  #?(:cljs 
     (xhr/send "/imgs"
      (fn [event] 
        (println event)
        (let [res (-> event .-target .getResponseText)
              parsed (.parse window.JSON res)]
          (cb parsed))))))

(defn make-url [name]
  (str "http://wordsonwalls.nyc.s3.amazonaws.com/processed/" name))

(defonce timer (atom nil))

(defn inc-visible-img []
  (swap! state update :visible-img
         (fn [x] 
           (println "visible image" x)
           (mod (inc x) 5))))

(defn trigger-anim []
  #?(:cljs 
     (do
       (if @timer
         (do (js/clearInterval @timer)
             (reset! timer nil))
         (reset! timer
           (js/setInterval 
             (fn [] 
               (println "INCREMENTING VISIBLE")
               (inc-visible-img))
             200))))))


(defn image-animation []
  [:div
   {:on-click trigger-anim}
   [:h1 "IMAGE ANUM"]
   (when (:names @state)
     (doall
       (for [x (range 10)]
         [:image {:src (make-url (nth (:names @state) x)) 
                  :style (when (not= x (:visible-img @state)) {:display "none"})
                  :key x}])))])

(defn render []
  [:div
    [:div.w6.center.green
      {:on-click #(swap! state conj {:r (rand 100)})}
      [:h1 "WORDS ON WALLS!"]
      (image-animation)]])

(tools/inject state #'render)





