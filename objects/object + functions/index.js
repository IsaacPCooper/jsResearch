let person = {
    name: "Bob",
    age: 25,
    country: "England"
}
let dataLog = " ";

function logData() {
    dataLog = person.name + " is " + person.age + " years old and lives in " + person.country;
    return dataLog;
}

logData();
console.log(dataLog);