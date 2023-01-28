// Largest among three number


function largestAmongThreeNum(a,b,c){

    if (a>b && a>c){
        console.log("a is greatest")
    }
    else if(b>a && b>c  ){
        console.log("b is greater")
    }
    else {
        console.log("c is greatest")
    }
}
largestAmongThreeNum(11,11,10)