(define (hanoi x)
  (if (= x 1)
      1
      (+ 1 (* 2 (hanoi (- x 1))))))

(define (hanoi-i x)
  (define (iter y z)
    (if (= z x)
        y 
        (iter (+ 1 (* 2 z)) (+ 1 z))))
  (iter 0 0))
     
(= 3 (hanoi 2))
(= 7 (hanoi 3))

(hanoi-i 3)
