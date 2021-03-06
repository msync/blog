(ns msync.deftype)

(defprotocol BarBazOperators
  (get-bar [this])
  (bar-inc! [this])
  (baz [this])
  (baz-inc! [this]))

(deftype FooBarBaz [foo ^:volatile-mutable bar ^:volatile-mutable baz]
  BarBazOperators
  (get-bar [_] bar)
  (bar-inc! [_] (set! bar (inc bar)))
  (baz [_] baz)
  (baz-inc! [_] (set! baz (inc baz))))

(def foo-bar-baz (FooBarBaz. 10 20 30))

(.foo foo-bar-baz)
(get-bar foo-bar-baz)
(bar-inc! foo-bar-baz)
(baz-inc! foo-bar-baz)
(.baz foo-bar-baz)
