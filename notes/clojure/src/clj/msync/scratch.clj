(ns msync.scratch
  (:require [clojure.string :refer [capitalize split]]))

(defn title-case-reduce [s]
  (->> s
       (reduce
        (fn [[prev accum] c]
          (cond
            (= :begin prev)
            [nil (Character/toUpperCase c)]
            (= \space c)
            [c (str accum prev)]
            (= \space prev)
            [nil (str accum prev (Character/toUpperCase c))]
            :else
            [nil (str accum c)]))
        [:begin ""])
       second))

(title-case-reduce "  the lord of the    rings")

(defn title-case-iteration
  [input-str]
  (let [prev-whitespace-p (atom true)
        result (atom "")]
    (run! #(reset! result
                   (str @result
                        (if @prev-whitespace-p
                          (do (reset! prev-whitespace-p (= \space %))
                              (if (= \space %) % (Character/toUpperCase %)))
                          (do (reset! prev-whitespace-p (= \space %))
                              %))))
          input-str)
    @result))

(title-case-iteration "     the lord of the rings")


(defn title-case-iteration-2 [input-str]
  (let [prev-whitespace-p (atom true)
        result (atom "")]
    (run! (fn [c]
            (reset! result 
                    (str @result
                         (if @prev-whitespace-p
                           (Character/toUpperCase c)
                           c)))
            (reset! prev-whitespace-p (= \space c)))
          input-str)
    @result))

(title-case-iteration-2 "    the lord of the rings")

(defn title-case-idiomatic
  [str]
  (clojure.string/join " " (map #(clojure.string/capitalize %)
                                (clojure.string/split str #" +"))))

(title-case-idiomatic "         the lord of the rings")


(def s "          the  lord of the rings   ")
(split s #"\s+")
(split s #"(?<=\s)|(?=\s)")
(defn title-case-regex [s]
  (->> (split s #"(?<=\s)|(?=\s)")
       (map capitalize)
       (apply str)))
(title-case-regex "\tThe lord of the    Rings   ")

(count (filter #(= % \t) s))
