(defproject wordsonwalls "0.0.2"
  :main wordsonwall.core
  :license {:name "Eclipse Public License" :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [mirror "0.0.1"]
                 [aleph "0.4.1-beta7"]
                 [cljsjs/react "15.3.1-0"]
                 [cljsjs/react-dom "15.3.1-0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.clojure/core.async "0.2.395"]
                 [ring "1.4.0"]]
  :uberjar-name "wordsonwalls.jar"
  :profiles {:dev {:source-paths  ["dev" "src" "test"]}})
