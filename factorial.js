function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }

    else{
        return num * factorial(num-1);
    }
}
let num = 6;
answer = factorial(num)
console.log("The factorial of " + num + " is " + answer);