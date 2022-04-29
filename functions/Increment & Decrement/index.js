let myNumber = 3;

function add3Points(){
    myNumber += 3;
};

function remove1Point(){
    myNumber -= 1;
};

function make10(){
    add3Points();
    add3Points();
    add3Points();
    remove1Point();
    remove1Point();
}

function make20(){
    make10();
    make10();
    remove1Point();
    remove1Point();
    remove1Point();
    remove1Point();
}

make10();
console.log(myNumber);

make20();
console.log(myNumber);