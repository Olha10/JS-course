
const me = {
    name: 'test',
    country: 'Ukraine',
    specialization: 'QA',
    year: 20,
    isHappy: true
}
//Use dot
me.city = "Kyiv";
console.log(me.city);
me.city = "Lviv";
console.log(me.city);

delete me.country;
console.log(me.country);
//Use square quotes - object[keyname]
console.log(me['isHappy']);

// Run in browser
// const fruit = prompt("Which fruit to buy?"); //banana
// const bag = {
//     [fruit]: 5
// };
// console.log(bag);
// console.log(bag.banana);

//If variable and key names are same
let name = 'test';
let age = 35;
const user = {
    name: name,
    age: age
};
//Can use:
const user1 = {
    name,
    age
};

const user2 = {
    name: 'te' + 'st',
    age: 20 + 20
};

let obj = {
    test: undefined
};
console.log(obj.test !== undefined);

//Check if object has a key
console.log('test' in obj);

//The "for...in" loop - walk over all keys of an object
for  (let key in me){
    console.log(key); //to get keys
    console.log(me[key]); //to get values
//can't use dot notation (me.key), because object doesn't have key 'key'
};

//One more way to get array with keys is use Object.keys
let keys = Object.keys(me);
console.log(keys);

//One more way to get array with values is use Object.values
let values = Object.values(me);
console.log(values);

for (let myKey in me) {
    console.log ('Key:', myKey, 'Has value:', me[myKey]);
};

let originalCountry = 'Ukraine';
let newCountry = originalCountry;
//before variable update
console.log(originalCountry); //Ukraine
console.log(newCountry); //Ukraine
//after variable update
originalCountry = 'USA';
console.log(originalCountry); //USA
console.log(newCountry); //Ukraine

//The same case, but with the object
const originalObj = {
    country: 'Italy'
};
const newObj = originalObj; //this will NOT copy
//before update
console.log(originalObj.country); //Italy
console.log(newObj.country); //Italy
//after update
originalObj.country = 'UK';
console.log(originalObj.country); //UK
console.log(newObj.country); //UK

//Clone object
const clone = {};
for (let key in me) {
    clone[key] = me[key];
}
clone.country = 'Spain';
console.log(me.country);
console.log(clone.country);

//Easy way to clone object
const clone2 = Object.assign({},me);
clone2.country = "Italy";
console.log(me.country);

//Copy all properties from 3 objects to one
let user3 = {name: 'test'};
let userAge = {age: 26};
let isAdmin = {isAdmin: true};
 const user4 = Object.assign(user3,userAge,isAdmin);
 console.log(user3);
 console.log(user4); //all properties from user3, userAge, isAdmin

 //Spread Operators
 let user5 = {name: 'test'};
let userAge1 = {age: 26};
let isAdmin1 = {isAdmin: true};
const userNew = {...user5,...userAge1,...isAdmin1};
console.log(user5); //properties only from user5
console.log(userNew); //all properties from  user5, userAge1, isAdmin1