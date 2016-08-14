
(require 'cljs.build.api)

(cljs.build.api/watch
  "src"
  {:main 'frontend.core
   :output-to "out/main.js"})
