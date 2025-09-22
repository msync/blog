(ns org.msync.dl-python.python-init
  (:require [libpython-clj2.python :as py]))

(defonce initialized?
         (do
           #_(alter-var-root #'libpython-clj.jna.base/*python-library* (constantly "python3.12m"))
           (py/initialize! :python-executable (str (System/getenv "HOME") "/.venv/dl/bin/python"))))
