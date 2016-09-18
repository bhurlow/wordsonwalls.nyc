
(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:output-to "public/out/main.js"
   :output-dir "public/out"
   :asset-path "out"
   :main 'frontend.core
   :verbose true})
