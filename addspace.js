function add_and_space(add, space){
    let string = "";
    for(let i = 0; i < add; i++){
        string += " ";
    }
    for(let j = 0; j < space; j++){
        string += "+";
    }
    return string;
}

let lines = 10;

let spaces = lines - 1;

while(spaces >= 0){
    let add = lines - spaces;
    console.log(add_and_space(spaces, add));
    spaces--;
}