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
           (mod (inc x) 10))))

(defn stop-and-clean-anim []
  #?(:cljs
      (do
        (js/clearInterval @timer)
        (reset! timer nil))))

(defn select-fortune []
  #?(:cljs
      (do
        (swap! state assoc :selected-fortue (rand-nth (:names @state))))))

(defn play-card-sound []
  #?(:cljs
     (let [audio (.querySelector js/document "audio")]
       (println audio)
       (.play audio))))
     ; (.play (.querySelector js/document "audio"))))

(defn trigger-anim []
  #?(:cljs 
     (do
       (play-card-sound)
       (if @timer
         (stop-and-clean-anim)
         (reset! timer
           (js/setInterval 
             (fn [] 
               (println "INCREMENTING VISIBLE")
               (inc-visible-img)
               (println "inside interval" (:visible-img @state))
               (when (>= (:visible-img @state) 9) 
                 (stop-and-clean-anim)
                 (select-fortune)))
             100))))))

(defn image-animation []
  [:div
   (when (and (:names @state) (nil? (:selected-fortue @state)))
     (doall
       (for [x (range 10)]
         [:image {:src (make-url (nth (:names @state) x)) 
                  :style (when (not= x (:visible-img @state)) {:display "none"})
                  :key x}])))])

(defn selected-fortune []
  (when (:selected-fortue @state)
    [:div
      [:h1 "YOUR SELECTED FORTURE"]
      [:p (:selected-fortue @state)]
      [:image {:src (make-url (:selected-fortue @state))}] 
      [:a {:href "/"} "share on twitter!"]
      [:br]
      [:a {:href "/"} "share on facebook!"]]))

(defn render []
  [:div
    [:div.w-60.center.green.mt6.pb4
      {:on-click #(swap! state conj {:r (rand 100)})}
      [:h1 "wordsonwalls.nyc"]
      [:a {:href "/about"} "about words on walls"]
      [:h3 
       {:on-click trigger-anim}
       "click to roll your forture for the day.."]
      (image-animation)
      (selected-fortune)
      [:audio {:style {:display "hidden"} 
               :src (str "/card_sound" (rand-nth [1 1]) ".mp3")}]]])

(tools/inject state #'render)





