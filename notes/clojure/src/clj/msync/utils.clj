(ns msync.utils)

(defmacro print-all [& fs]
  `(doseq [f# '~fs] (println (eval f#))))
