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

// use isArray to check if your variable is array:
let arr3 = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr3)); // true

// pop/push - work with the end of array, shift/unshift - work with the start of array

// pop - take away last element
console.log(fruits.pop()); // remove "Pineapple" and print it
console.log(fruits); // Apple, Orange, Pear

fruits.push("Pineapple"); //Add Pineapple to the end of fruit array
console.log(fruits);

//shift - take away the first element
//unshift  - add element to the begging of array

let cats = [];
cats[100] = 5;
console.log(cats.length - 1);
cats.age = 25;

// (1) Just regular 'for' loop with checking length
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

// for..of doesn’t give access to the index of the current element
// variable name is not a strict
for (let fruit of fruits) {
    console.log(fruit);
};

// (3) forEach method, runs provided function for every member of array
fruits.forEach(function(item, index, array) {
    console.log(item);});

// (4) .map() method
let newArr = fruits.map((item, index, array) =>{
    console.log(item);
    return item + 10;
});
console.log(fruits); // [10, 30, 100]
console.log(newArr);
// The result of the function will be passed to new array    