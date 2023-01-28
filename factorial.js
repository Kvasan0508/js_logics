// find the factorial among number
// let a = 7;

function factorial(a) {
  if (a < 0) {
    console.log("negative number ");
  } else if (a == 0) {
    console.log("factoial is 1");
  } else {
    let fact = 1;
    for (i = 1; i <= a; i++) {
    //   fact *= i;
    fact = fact * i
    }
return fact  
}
}
c = factorial(5);

console.log(c)