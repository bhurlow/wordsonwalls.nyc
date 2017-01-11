(ns pages.about)

(defn render []
  [:div.w-60.center.green.mt6.pb4
    [:h1 "About Words On Walls"]
    [:p "blurb about ther artists behind Words On Walls"]
    [:a {:href "/"} "<< make a fortune"]])
