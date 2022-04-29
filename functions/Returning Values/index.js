let num1 = 102;
let num2 = 204;

function getLowestNum() {
    if (num1 < num2){
        return num1;
    }
    else if (num2 < num1) {
        return num2;
    } 
    else {
    return num1;
    }
}

let lowestNum = getLowestNum();
console.log(lowestNum);

function addNums() {
   return num1 + num2;
}

let sum = addNums();
console.log(sum);
