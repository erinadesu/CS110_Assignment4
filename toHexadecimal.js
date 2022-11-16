function hex(num) {
    let hex = "";
}
while (num > 0) {
    let remainder = num % 16;
    let hexArray = ["A", "B", "C", "D", "E", "F"];
if(remainder < 10){
    hex += remainder;
}
else{
    hex += hexArray[remainder - 10];
}
num = Math.floor(num / 16)
}

let index = hex.length - 1;
let actHex = "";
while (index >= 0) {
    actHex += hex[index];
    index--;

    return actHex
}

