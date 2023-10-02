

var math: number = 89;
console.log(`Maths mark is ${math}`);


var pyhsics:number = 12;
console.log(`physics marks is ${pyhsics}`);

var chem:number = 94;
console.log(`chemistry marks is ${chem}`);

var avg:number = math + pyhsics + chem;
console.log(`Average mark is ${avg}`);

var result: number = avg / 3;
console.log(`The average score of student is ${result}`);


 if (result<70) {
    console.log(`Congratulations , your grade is "C"`);
    
 } 
 if (result>70 && avg<90) {
    console.log(`Congratulations , your grade is "B"`);
 }

 if (result>90) {
    console.log(`Congratulations , your grade is "A"`);
 }

