var math = 89;
console.log("Maths mark is ".concat(math));
var pyhsics = 92;
console.log("physics marks is ".concat(pyhsics));
var chem = 94;
console.log("chemistry marks is ".concat(chem));
var avg = math + pyhsics + chem / 3;
console.log("Average mark is ".concat(avg));
if (avg < 70) {
    console.log("Congratulations , your grade is \"C\"");
}
if (avg > 70 && avg < 90) {
    console.log("Congratulations , your grade is \"B\"");
}
if (avg > 90) {
    console.log("Congratulations , your grade is \"A\"");
}
