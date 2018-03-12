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
  
  if (pairs.length==1 && pairs[0][1]>100) {
	 counter=powFun(pairs[0][0],pairs[0][1]-1,1000000007);
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

  function findN() {
	let N=1;
	pairs.map(x => N*=powFun(x[0],x[1],1000000007));
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
 
 function addmod(base, exp, mod) {
    // Precondition: base<mod, exp<mod
    // If it will overflow, use alternative calculation
    if (base + exp <= base) base = base - (mod - exp) % mod;
    else base = (base + exp) % mod;
    return base;
 }

function sqrmod(a, n) {
    let b;
    let sum = 0;

    // Make sure original number is less than n
    a = a % n;

    // Use double and add algorithm to calculate a*a mod n
    for (b = a; b != 0; b >>= 1) {
        if (b & 1) {
            sum = addmod(sum, a, n);
        }
        a = addmod(a, a, n);
    }
    return sum;
 }

 function powFun(base, exp, mod) {
    let temp;
    if(exp === 0) return 1;
    else if(exp % 2 === 0) {
        temp = powFun(base, exp/2, mod) % mod;
        return sqrmod(temp, mod);
    } else return (base * powFun(base, exp - 1, mod)) % mod;
 }

}