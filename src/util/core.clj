(ns util.core)

(require 'cljs.build.api)

(defn build []
  (cljs.build.api/build "src"
                        {:output-to "public/out/main.js"
                         :output-dir "public/out"
                         :asset-path "out"
                         :main 'frontend.core
                         :verbose true}))

(defn build-advanced []
  (cljs.build.api/build "src"
                        {:output-to "public/out/main.js"
                         :output-dir "public/out"
                         :asset-path "out"
                         :optimizations :advanced
                         :main 'frontend.core
                         :verbose true}))
