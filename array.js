let arr = new Array();
let arr1 = [];
console.log(typeof arr);

const fruits = ['Apple', 'Orange', 'Plum'];
//Index
// --0-- --1-- --2--
//["Apple","Orange", "Plum"]

let apple = fruits[0];
let orange = fruits[1];
let plum = fruits[2];
console.log(apple,orange); //Apple Orange

fruits[2] = "Pear";
fruits[3] = "Pineapple";

console.log(fruits);

let arr2 = [
    "Apple",{
        name: "Karl"
    },
    true,
    function() {
        console.log('hello');
    }
];
let n = arr2[2];
console.log(n.name);
arr2[3]();

