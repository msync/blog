;; [[file:../../index.org::*Hello Tensorflow - Clojure Edition][Hello Tensorflow - Clojure Edition:1]]
(ns machine-learning-notes.hello-ml
    (:require [libpython-clj.python :as py]
              [libpython-clj.jna.base]))


  (alter-var-root #'libpython-clj.jna.base/*python-library* (constantly "python3.8m"))
  (py/initialize! :python-executable (str (System/getenv "HOME") "/.venv/ml/bin/python")
                  :library-path (str (System/getenv "HOME") "/.venv/ml/lib/libpython3.8m.dylib"))
;; Hello Tensorflow - Clojure Edition:1 ends here

;; [[file:../../index.org::*Hello Tensorflow - Clojure Edition][Hello Tensorflow - Clojure Edition:2]]
(require '[libpython-clj.require :refer [require-python]])
  (require-python '[tensorflow :as tf]
                  '[tensorflow.keras.models :as models]
                  '[tensorflow.keras.layers :as layers]
                  '[tensorflow.keras.datasets.mnist :as mnist]
                  '[numpy :as numpy]
                  '[builtins :as python])


  (let [counter (atom 0)]
    (defonce show (fn [r] (println (str @counter " --> " r)) (swap! counter inc))))
;; Hello Tensorflow - Clojure Edition:2 ends here

;; [[file:../../index.org::*Hello Tensorflow - Clojure Edition][Hello Tensorflow - Clojure Edition:3]]
(defonce mnist-data (mnist/load_data))

  (let [[[x-train y-train] [x-test y-test]] mnist-data] ;; => 1
    (def x-train (numpy/divide x-train 255)) ;; => 2
    (def y-train y-train)
    (def x-test (numpy/divide x-test 255))
    (def y-test y-test))

  (defonce model (models/Sequential [(layers/Flatten :input_shape [28 28]) ;; => 3
                                     (layers/Dense 128 :activation "relu")
                                     (layers/Dropout 0.2)
                                     (layers/Dense 10 :activation "softmax")
                                     ]))

  (py/py. model compile ;; 4, 5
          :optimizer "adam"
          :loss "sparse_categorical_crossentropy"
          :metrics (python/list ["accuracy"])) ;; 6
  (py/py. model fit x-train y-train :epochs 5)
;; Hello Tensorflow - Clojure Edition:3 ends here

;; [[file:../../index.org::*Hello Tensorflow - Clojure Edition][Hello Tensorflow - Clojure Edition:4]]
(py/py. model evaluate x-test y-test :verbose 2)
;; Hello Tensorflow - Clojure Edition:4 ends here

;; [[file:../../index.org::*Huggingface Tokenizers][Huggingface Tokenizers:2]]
(require-python '[tokenizers
                    :refer [BertWordPieceTokenizer
                            SentencePieceBPETokenizer
                            CharBPETokenizer
                            ByteLevelBPETokenizer]])
  (require-python '[transformers
                    :refer [BertTokenizer]])





  (def tokenizer (ByteLevelBPETokenizer "gpt2-vocab.json" "gpt2-merges.txt"))

  (def encoded (py/a$ tokenizer encode "I can feel the magic, can you?"))

  (py/py.- encoded #_type_ids #_tokens offsets)
;; Huggingface Tokenizers:2 ends here
