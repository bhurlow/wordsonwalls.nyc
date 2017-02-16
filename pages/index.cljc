(ns pages.index
  (:require [clojure.string]
            [mirror.tools :as tools]
   #?(:cljs [goog.net.XhrIo :as xhr]))
 #?(:clj (:import [java.net.URLEncoder])))

#?(:cljs (enable-console-print!))

(defn style->string [style-map]
  (->> style-map
      (map (fn [pair]
             (str (name (first pair))
                  ": "
                  (second pair)
                  ";")))
      (interpose " ")
      (reduce str)))

(defn style [m]
  #?(:clj (style->string m)
     :cljs m))

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

(def FORTUNE_TIMEOUT 30000)

(defn save-fortune-state [name]
  #?(:cljs
     (do
       (.setItem js/localStorage "fortune" name)
       (.setItem js/localStorage "fortune_time" (+ FORTUNE_TIMEOUT (.now js/Date))))))

(defn select-fortune []
  #?(:cljs
      (do
        (swap! state assoc :selected-fortune (rand-nth (:names @state)))
        (save-fortune-state (:selected-fortune @state))
        (aset window.location "hash" (:selected-fortune @state)))))

(defn play-card-sound []
  #?(:cljs
     (let [audio (.querySelector js/document "audio")]
       (println audio)
       (.play audio))))

(defn trigger-anim []
  #?(:cljs 
     (do
       (swap! state assoc :clicked-ball true)
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
   (when (and (:names @state) (nil? (:selected-fortune @state)))
     (doall
       (for [x (range 10)]
         [:image {:src (make-url (nth (:names @state) x)) 
                  :style (when (not= x (:visible-img @state)) (style {:display "none"}))
                  :key x}])))])

(defn selected-fortune []
  (when (:selected-fortune @state)
    [:div
      [:image {:src (make-url (:selected-fortune @state))}] 
      [:a..link.white.dim.fl {:href "/"} "share on twitter!"]
      [:br]
      [:br]
      [:a.link.white.dim.fl {:href "/"} "share on facebook!"]]))

(defn fortune-saved? []
  #?(:cljs
      (let [fortune-time (.getItem js/localStorage "fortune_time")
            now (.now js/Date)
            expired? (> now fortune-time)]
        (not expired?))))

(defn set-saved-forture []
  #?(:cljs
      (when (nil? (:selected-fortune @state))
        (println "SET STATE FORITE")
        (swap! state assoc :selected-fortune (.getItem js/localStorage "fortune")))))

(defn display-fortune-expiration []
  #?(:cljs
      (let [fortune-time (.getItem js/localStorage "fortune_time")
            now (.now js/Date)]
        [:p.gray (str "Expires in " (- fortune-time now) " ms")])))

(defn detect-hash []
  #?(:cljs
     (when (not (empty? (.-hash js/window.location)))
       (println "SETTING SELECETED!")
       (swap! state assoc :selected-fortune 
              (.replace (.-hash js/window.location) "#" "")))))

(defn render-ball []
  #?(:cljs
     (when (not (:selected-fortune @state))
        [:div
          [:img.pointer
           {:on-click trigger-anim
            :src "/static/crystal_ball_transparent.png"}]
          [:p.bg-black.pa2
           "click the cyrstal boll to roll your forture for the day..."]])))

(defn render-about []
  [:p.fl.lh-copy.tl.measure "Everyone has something to say, whether politics, poetry or romantic pronouncements. Humerous aphorisms compete with surreal rants and New York city walls offer a constant comment canvas of free expression for it all. Ken Brown has been documenting the ephemeral nature of the city for over 30 years. He's discovered that these words hold much more than opinion and attitudes, they suggest a texture of the times. Moreover, they offer visions into the future. Words on Walls, a projected aided by Brian Hurlow and Marcus Flemming, seeks to fix these prescient phrases of New York street culture into something more than stone. Rub the digital crystal ball to receive your NYC Wors on Walls forture today! As they say, if you want to know what's going on, read the walls."])

(defn render []
  [:div {:style {:background-color "darkblue"
                 ; :background "url(/static/cosmos_crop.jpg)"
                 :color "white"
                 :background-size "cover"
                 :width "100%"
                 :height "100vh"
                 :text-align "center"
                 :overflow "hidden"}}
    [:div.w-60.center.mt6.pb4
      {:on-click #(swap! state conj {:r (rand 100)})}
      [:h1.tracked-tight.ttu.fl [:a {:href "/"} "wordsonwalls.nyc"]]
      (when (not (:clicked-ball @state))
        (render-ball))
      (if (fortune-saved?)
        (do (println "FORTUEN ALREADY SAVED")
            (set-saved-forture)
            [:div
              ; (display-fortune-expiration)
              (selected-fortune)
              [:div.mt4 (render-about)]])
        (do
          (println "no saved fortune found")
          [:div
            (image-animation)
            (selected-fortune)
            (when (:selected-fortune @state)
              [:div.mt4 (render-about)])]))
      ; [:a.mv4.fl {:href "/about"} "about wordsonwalls.nyc"]
      [:audio {:style {:display "hidden"} 
               :src (str "/card_sound" (rand-nth [1 1]) ".mp3")}]]])

(tools/inject state #'render)

;; on page load look for hash
(detect-hash)


