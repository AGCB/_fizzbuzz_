//3.js
// an attempt at fizzbuzz.
// a few things to show... function declarations, if statements,
//		function invocations, a few shorthands.

//
function fizzBuzz(totalNum, fizzWord, buzzWord) {
	
	var print = console.log.bind(console);
	

	for (i = 1; i <= totalNum; i++) {
		var db3 = (i % 3 === 0);
	var db5 = (i % 5 === 0);

		if (db3 && db5) {
			print(fizzWord + buzzWord);
		}
		else if (db5) {
			print(i + " is divisible by 5!!!" + buzzWord);
		}
		else if (db3) {
			print(i + "is a divisible 3 jackpot!!" + fizzWord);
		}
		else {
				print(i);

		}
	}


};

fizzBuzz(100, 'fuzz', 'buzz');