//fizzbuzz 09032016
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