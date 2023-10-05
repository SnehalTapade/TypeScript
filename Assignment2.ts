
// class vehicle {

//     constructor (model, price, year) {
//         console.log("constructor called ..." + model + price + year);
//         this.model = "BMW"
//         this.price = 25000;
//         this.year = 2023;
//     }
// }

// let vehicleBmw = new vehicle ("BMW", 25000, 2023);
// console.log(vehicleBmw);


console.log(`=============== Remove duplicate items ========================`);

// var arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

//     function removeDuplicate(arr) {
//         return [...new Set(arr)];
//     }

//     console.log(`removeDuplicate(arr)`);
    

let arr = ["apple", "mango", "apple",
		"orange", "mango", "mango"];

function removeDuplicates(arr) {
	return arr.filter((item,
		index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
