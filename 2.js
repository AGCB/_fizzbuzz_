// script 1.js works fine.
// this is just me working it again from scratch to 
// see if i can still regurgitate it.

// first the for loop
for (var i = 1; i <= 30; i++) {
	
	if (i % 3 === 0 && i % 5 == 0) {
		console.log('fizzbuzz');
	}

		else if (i % 3 === 0) {
			console.log('fizz');
		}
		else if (i % 5 === 0) {
			console.log('buzz');
		}
		else console.log(i);

	}
