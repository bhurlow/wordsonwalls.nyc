
(require 'cljs.build.api)
(require 'cljs.repl.node)
(require 'cljs.repl.browser)

(cljs.repl/repl* 
  (cljs.repl.browser/repl-env)
  {:output-to "public/out/main.js"
   :output-dir "public/out"
   :asset-path "out"
   ; :main 'frontend.core
   ; :watch "src"
   :parallel-build true
   :verbose true})
