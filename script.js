//fizzbuzz 09032016
// We start defining fb(); function with 5 arguments.
// t = total, fw=fizzword bw=buzzword m1=1stMultiple m2=2nd...
//
// We have the typical FizzBuzz problem. 
// Print the numbers 1-100 with multiples of 3 written as "fizz"
// and multiples of 5 as "buzz"
// if there is ever a number that is a multiple of both, "fizzBuzz!"
//
// This implementation is all i've understood so far from ditam's
// 20 ways to fizzbuzz article.
// I like that someone could throw out a slightly modified
// request and you could just call the function again 
// with different argument values.
// "Give me 1-569 with "BuddyHolly" instead of "FizzBuzz
// and make it on multiples of 6 and 15..... please"
// and you could run fb(569, "Buddy", "Holly", 6, 15);
//
function fb(t, fw, bw, m1, m2) {
  t = t || 100;
  fw = fw || 'urn';
  bw = bw || 'rere';
  m1 = m1 || 3;
  m2 = m2 || 5;
  

  for (i = 1;i<=t;i++) {
  	let d1 = (i % m1 === 0);
  	let d2 = (i % m2 === 0);
  	let output = '';

  	if (d1) {
  		output += fw;
  	}
  	if (d2) {
  		output += bw;
  	}
  	if (output === '') {
  		output += i;
  	}
  	console.log(output);
  }//for loop

}//function definition
fb()
