function fb(t, fw, bw, m1, m2) {
	p = console.log.bind(console);
	t = t || 100;
	fw = fw || 'fizz';
	bw = bw || 'buzz';
	m1 = m1 || 3;
	m2 = m2 || 5;
	for (var i = 1; i <= t; i++) {
		var div1 = (i % m1 === 0);
		var div2 = (i % m2 === 0);
		var jp = (div1 && div2);
		var jpw = (fw + bw + '!!!');
		var output = '';
		if (div1) {
			output += fw;
		}
		if (div2) {
			output += bw;
		}
		if (output === fw + bw) {
			output += '!!!'
		}
		if (output === '') {
			output += i;
		}
		p(output);
	}//end for loop 
}// end function definition
fb();/*call fizzbuzz w/ default values of 100, fizz, buzz, 3, and 5.
 it's a simple programming exercise.

 LINE1...we are defining the function fb. short for fizzbuzz.
  we are talking 5 arguments when we call it. Lines 3-7 make it so 
  that you can call it by simply running fb();

 LINE2... i wanted printing to be as simple as p();

LINE3 to 7... if any of them are run as undefined, we deal with it.

LINE8... i start the for loop. a random variable called i.

LINE9 to 12... i'm making some definitions to make the if statements
               a bit more like regular language. 

LINE13... I initialized an empty string output. the next 11lines 
          of logic are what's going to manipulate this output.

LINE14 to 25....if i is divisible by 3, add fizz to the output
                if i is divisible by 5, add buzz to the output.
                if i is equal to fizzbuzz, add !!! to the end
                if i is still blank, then add i to the output.
                every iteration through a number should print something.
                if nothing else, then i itself.

Once we have gone through all of the numbers from variable t and
printed LINE26, we end the loop, the function, and have a call at LINE29.
 */