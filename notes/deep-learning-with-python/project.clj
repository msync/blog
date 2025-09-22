(defproject org.msync.dl-python "0.1.0-SNAPSHOT"
  :description "Exercises in the book - Deep Learning with Python"
  :url "https://github.com/jaju/deep-learning-with-python"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.12.0-alpha9"]
                 [clj-python/libpython-clj "2.025"]]
  :repl-options {:init-ns org.msync.dl-python.core})
