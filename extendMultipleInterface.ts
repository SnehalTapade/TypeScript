interface IPerson {

    name: string;

}

 

interface IEmployee {

    id: number;

    salary: number;

}

 

interface Dev extends IPerson, IEmployee {

    course: string;

}

 

 

var newDev: Dev = {

    course: "Angular",

    name: "Jack",

    id: 1,

    salary: 1000,

}
console.log(newDev);
