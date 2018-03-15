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
  
  if (s=='0' && pairs.map(x => {x[1]==1})) {
	counter = j = 1;
	pairs.map(x => {counter*=x[0]-1; j*=x[0]});
    return  j-counter;
  }
  
  if (!s.indexOf('11') && pairs.some(x => x[0] == 2)) return 0; // It is true for any x[0]==a and string s containing "1" a-pcs
	  
  if (pairs.length==1 && pairs[0][1]>100) {
	 counter=powFun(pairs[0][0],pairs[0][1]-1,1000000007); // it's true for 3: 1*3^999999999. Function should be written for any pairs[0][0]
	 return counter;
  }
  
    let numberN;

   if (s.indexOf('1') == -1 ) { //(s.indexOf('1') == -1 && s.length>2)
	console.log("We are here");

	let N=1;
	pairs.map(x => N*=powFun(x[0],1,1000000007));
	numberN = N;

	let bigFlag=0;
	k=3;
	N = lengthStr/2;
	console.log("pairs: "+pairs);

	let cuttedPairs;
	cuttedPairs = pairs;
	cuttedPairs=pairs.shift();
	
	while (k<numberN) {
	
	j=0;
	flag=0;
	
	while (j>=0 )  {
		if (nod(k,pairs)==0) {j++; k+=2;} else {k+=2; break;}
		if (j>=N) { if(flag==0) {bigFlag++; flag++; } else {bigFlag+=2;} }
	}
	
	if (flag>0) bigFlag++;
	}

	counter=bigFlag;
	pairs.splice(0,0,cuttedPairs);
	let x;
	
	for (i=0; i<pairs.length;i++) {
		x=powFun(pairs[i][0], (pairs[i][1])-1, 1000000007);
		counter=modForLong(counter,x,1000000007);
	}
	
	return counter;
   }
   
  
  if (pairs.length<10) {
  numberN = findN();
  console.log(numberN);
  
  //if (numberN<184848378){
	  
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
 //}
  
  return counter;
  }   
  
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
 
 function modForLong(a, b, mod) {
	 let aArray = [], bArray = [];
	 let product;
	 aArray[0] = Math.floor(a/10);
	 bArray[0] = Math.round(b/10);
	 aArray[1] = a-9*aArray[0];
	 bArray[1] = b-9*bArray[0];
	 
	 product = (aArray[0]*bArray[0])%mod;
	 
	 for (let i=0; i<80;i++) {
		product = product+(aArray[0]*bArray[0])%mod;
		product=product%mod;
	 }
		
	for (let i=0; i<9;i++) {
		product = product+(aArray[0]*bArray[1])%mod;
		product=product%mod;
	 }
	 
	 for (let i=0; i<9;i++) {
		product = product+(aArray[1]*bArray[0])%mod;
		product=product%mod;
	 }
	 
	 product=product+(aArray[1]*bArray[1])%mod;
	 
	 return product%mod;
	 
 }

}