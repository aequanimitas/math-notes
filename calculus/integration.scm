(define (accumulate-i x y term next combiner null-value)
  (define (iter a result)
    (if (> a y)
      result
      (iter (next a) (combiner (term a) result))))
  (iter x null-value))

; dx = section, derivative, smallest part we want to have, question is how do we compute for the next step?
; f = arrow direction
; a = lower limit
; b = upper limit
(define (integral f a b dx))
