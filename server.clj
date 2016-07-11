
; (require '[aws.sdk.s3 :as s3])

; (wants '[amazonica "0.3.66"])
; (require '[amazonica.aws.s3 :refer :all])

(def cred 
  {:access-key (System/getenv "AWS_ACCESS_KEY"), 
   :secret-key (System/getenv "AWS_SECRET_ACCESS_KEY")})

(println cred)

; (list-buckets cred)

; (println (s3/list-objects cred "wordsonwalls.nyc"))
; (println (s3/list-buckets cred))

