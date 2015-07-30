options( digits = 16 )
library( jsonlite )


n = 39
p  = 0.3
probs = seq( 0, 1, 0.01 )
y = qbinom( probs, n, p  )

cat( y, sep = ",\n" )

data = list(
	n = n,
	p  = p ,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
