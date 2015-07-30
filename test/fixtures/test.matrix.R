options( digits = 16 )
library( jsonlite )

n = 30
p  = 0.02
probs = 0:24 / 25
y = qbinom( probs, n, p  )

cat( y, sep = ",\n" )

data = list(
	n = n,
	p  = p ,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
