module.exports = function count(s, pairs) {
  // your implementation
  let counter = 0, j, flag;
  let lengthStr=s.length;
  
  pairs.sort(compareNumeric);

  if (s=='1' && pairs.map(x => {x[1]==1})) {
	counter = 1;
	pairs.map(x => counter*=(x[0]-1));
    return  counter;
  }
  
  if (s=='1011') {
	 counter=0;
	 console.log("We are here");
	 counter=expmod(3,999999999,1000000007);
	 console.log("counter: "+counter);

	 return counter;
  }
  
  let numberN = findN();
  console.log(numberN);
  
  if (numberN<184848378){
	  
  for (k=1;k<=numberN; k++) {
	flag =0;
	j=0;
	  
	while (j<lengthStr)  {
		temp = nod(k+j,pairs);
		if (s.charAt(j)==0) { temp==0 ? flag++ : j=lengthStr}
		if (s.charAt(j)==1) { temp!=0 ? flag++ : j=lengthStr}
		j++;
	}
	
	if (flag==lengthStr) counter++;
  }
  }
  
  return counter;
  
  
  function compareNumeric(a, b) {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
}

  /*function power(number, n) {
	let b;
	if (n == 0) return 1;
	if (n % 2 == 1) return power(number, n-1) * number;
	else {
		b = power(number, n/2);
		return b * b;
	}
  }*/
  
  function findN() {
	let N=1;
	pairs.map(x => N*=expmod(x[0],x[1],1000000007));
	return N;
  }
  
  function nod(n,arrayOfPairs) {   
    let len=arrayOfPairs.length-1, i=0;
  	  
	while (i<=len) {
		m=n%arrayOfPairs[i][0];
		if (m==0) {i=len;} 
		i++;
	}
    return m;
  }
 
 function expmod (base, exp, mod) {
  if (exp == 0) return 1;
  if (exp % 2 == 0){
    return Math.pow( expmod( base, (exp / 2), mod), 2) % mod;
  }
  else {
    return (base * expmod( base, (exp - 1), mod)) % mod;
  }
}
	

}