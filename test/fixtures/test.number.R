options( digits = 16 )
library( jsonlite )


n = 5
p  = 0.7
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qbinom( probs, n, p  )

cat( y, sep = ",\n" )

data = list(
	n = n,
	p  = p ,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
