let age = prompt("How old are you?");

if (age < 6 ){
    alert("The course is free for those under 6")
}
else if (age > 6  && age < 17){
    alert("You are eligible for the child discount")
}
else if (age > 17  && age < 26){
    alert("You are eligible for the student discount")
}
else if (age > 26  && age < 66){
    alert("The course is full price")
}
else if (age > 66){
    alert("You are eligible for the senior citizen discount")
}