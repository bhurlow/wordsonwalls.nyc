
(require 'cljs.build.api)

; (cljs.build.api/watch
;   "src"
;   {:main 'frontend.core
;    :output-to "public/out/main.js"})

; (cljs.build.api/build "src"
;   {:main 'frontend.core
;    :output-to "public/out"})

(println "ABOUT TO BUILD")

(cljs.build.api/watch "src"
  {:output-to "public/out/main.js"
   :output-dir "public/out"
   :asset-path "out"
   :main 'frontend.core
   :verbose true})

   ; :asset-path "fooout"})
