
(wants '[org.clojure/clojurescript "1.9.89"])
(wants '[org.omcljs/om "0.9.0"])

(require 'cljs.build.api)

(cljs.build.api/watch
  "src"
  {:main 'frontend.core
   :output-to "out/main.js"})
