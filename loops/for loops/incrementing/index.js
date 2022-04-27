// A function that increments a value when ran.
let totalNumber = 0;


function incrementNumber() {
    totalNumber++;
}
incrementNumber();

// Done with a For Loop - if i is less than 10, increment i by 1
for (let i = 0; i < 10; i++)
{
    incrementNumber();
    console.log(totalNumber);
}
