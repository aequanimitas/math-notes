(define (hanoi x)
  (if (= x 1)
      1
      (+ 1 (* 2 (hanoi (- x 1))))))

(= 3 (hanoi 2))
(= 7 (hanoi 3))
