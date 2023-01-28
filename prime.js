/*
prime Number 



*/

function checkPrime(a) {
    let prime = true;
  if (a == 1) {
    console.log("1 is neither prime nor composite");
  } 
  
  
  else if (a > 1) {
    for (let i = 2; i < a; i++) {
      if ( a % i == 0) {
        prime = false;
        break;
      } 
      
    }

    if(prime){
        console.log(` ${a} prime number`);
      }
      else{
        console.log(` ${a} composite  number   `);
      }
}


 
}
checkPrime(4)