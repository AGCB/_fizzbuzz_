function fb(t, fw, bw, m1, m2) {
	t = t || 100;
	fw = fw || 'fizz';
	bw = bw || 'buzz';
	m1 = m1 || 3;
	m2 = m2 || 5;
	
	for (var i = 1; i <= t; i++) {
		var output = '';
		var dx1 = (i % m1 === 0);
		var dx2 = (i % m2 === 0);
		if (dx1) {
			output += fw + i;
		}
		if (dx2) {
			output += bw + i;
		}
		if (output === fw + bw) {
			output += i;
		}
		
		if (output !== '') {
			console.log(output);}
	}//ending for loop
}// end function declaration
fb(); // call the function