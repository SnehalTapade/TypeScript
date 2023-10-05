// class vehicle {
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//     constructor (model, price, year) {
//         console.log("constructor called ..." + model + price + year);
//         this.model = "BMW"
//         this.price = 25000;
//         this.year = 2023;
//     }
// }
// let vehicleBmw = new vehicle ("BMW", 25000, 2023);
// console.log(vehicleBmw);
console.log("=============== Remove duplicate items ========================");
var arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
function removeDuplicate(arr) {
    return __spreadArray([], new Set(arr), true);
}
console.log("removeDuplicate(arr)");
