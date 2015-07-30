options( digits = 16 )
library( jsonlite )


n = 17394
p  = 0.6
probs = seq( 0, 1, 0.01 )
y = qbinom( probs, n, p  )

cat( y, sep = ",\n" )

data = list(
	n = n,
	p  = p ,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
