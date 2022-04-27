// Assign Values to variables
let num1 = 2;
let num2 = 4;
let num3 = 6;
let numberSum;

// Create a function to add the variables together
function sumOfNums(){
    numberSum = num1 + num2 + num3;

    console.log("Numbers have been added!")
}

// Create another function to handle outputs
function outputs(){
    var sumOutput = "The sum of the three numbers is:" + " " + numberSum;
    
    console.log(sumOutput);
}

sumOfNums();
outputs();



