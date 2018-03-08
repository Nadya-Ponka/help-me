module.exports = function count(s, pairs) {
  // your implementation
  function power(number, n) {
	let b;
	if (n == 0) return 1;
	if (n % 2 == 1) return power(number, n-1) * number;
	else {
		b = power(number, n/2);
		return b * b;
	}
  }
  
  function findN() {
	//let lengthPairs = pairs.length;
	let N=1;
	pairs.map(x => N*=power(x[0],x[1]));
	//for (let i=0; i<lengthPairs; i++)  {	}
	  return N;
  }
  
  
  
  console.log(pairs);
  let numberN = findN();
  console.log(numberN);
  
    function nod(n,m) {   
      let p=n%m;
	  while (p!=0) {
		  n=m;
		  m=p;
		  p=n%m;
	  }
    return m;
}

	
  let counter = 0,j,flag;
  let lengthStr=s.length;
 //   console.log("lengthStr: "+lengthStr);
 if (numberN <6000000) {
  for (let k=1;k<=numberN; k++) {
	//  console.log("K: "+k);
	  flag =0;
	  j=0;
	  
	while (j<lengthStr)  {
	if (s.charAt(j)==0 && nod(k+j,numberN)!=1) {flag++;}
	if (s.charAt(j)==1 && nod(k+j,numberN)==1) {flag++;}
	j++;
	}
	if (flag==(lengthStr)) counter++;
  }
 }
  return counter;
}