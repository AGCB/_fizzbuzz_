//attempt number 3.
// i had attempt 2 working fine but i still 
// would like to pull it off without many stages
// of debugging.
// perhaps i shouldn't be drilling syntax into my 
//head at this stage but, ... here goes nothing...

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FIZZBUZZ');
	}

	else if (i % 3 === 0) {
		console.log('fizz');
	}

	else if (i % 5 === 0) {
		console.log('buzz');
	}

	else console.log(i);


};