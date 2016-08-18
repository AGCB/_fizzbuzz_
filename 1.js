// start with the for loop
for (var i = 1; i <= 100; i++) {

//if the remainder of i divided by 3 is 0 AND by 5 is 0, 
// then print fizzbuzz	
	if (i % 3 === 0 && i % 5 == 0) {
		console.log('fizzbuzz');
	}
	// else if dividing it by 5 is 0, print buzz
	else if (i % 5 === 0) {
		console.log('buzz');
	}
	// else if dividing it by 3 is 0, print fizz
	else if (i % 3 === 0) {
		console.log('fizz');
	}
	// otherwise, just console.log the number itself.
	else console.log(i);	


};