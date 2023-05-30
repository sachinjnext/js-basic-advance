var dad = ["bablu", "sendhi", "ak", "sima"];
console.log(dad);
dad.sort();
console.log(dad);


const fruits = ["aanana", "brange", "cpple", "dango"];
console.log(fruits);
fruits.sort();
fruits.reverse();
console.log(fruits);



const points = [40, 100, 1, 5, 25, 10];
console.log(myArrayMax(points));
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}


const point = [40, 100, 1, 5, 25, 10];
console.log(myarraymin(point));
function myarraymin(arr) {
    return Math.min.apply(null, arr);
}