(ns org.msync.dl-python.core
  (:require [org.msync.dl-python.python-init :refer [initialized?]]
            [libpython-clj2.require :refer [require-python]]))

(require-python '[numpy as np])

(np/array [1 2])
