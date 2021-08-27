(ns org.msync.dl-python.python-init
  (:require [libpython-clj.python :as py]
            [libpython-clj.jna.base]))

(defonce initialized?
         (do
           (alter-var-root #'libpython-clj.jna.base/*python-library* (constantly "python3.8m"))
           (py/initialize! :python-executable (str (System/getenv "HOME") "/.venv/dl/bin/python"))))


