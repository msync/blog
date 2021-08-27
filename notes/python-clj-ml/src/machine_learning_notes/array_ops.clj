;; [[file:../../index.org::*General Array Operations][General Array Operations:1]]
(ns machine-learning-notes.array-ops
    (:require [libpython-clj.python :as py]
            [libpython-clj.require :refer [require-python]]))


  (require-python '[builtins :as python]
                  '[numpy :as numpy])



  (numpy/divide (range 10) 2)
  (numpy/divide [-10 -5 0 5 10] 3)



  (numpy/divide (python/list '(1 2 3)) 3) ;; Works
  (numpy/divide (py/->py-list '(1 2 3)) 3) ;; Works


  (numpy/divide (python/list #{1 2 3}) 3) ;; Works
  (numpy/divide (py/->py-list #{1 2 3}) 3) ;; Works



  (numpy/divide [[1 2 3] [4 5 6] [7 8 9]] 5)
;; General Array Operations:1 ends here
