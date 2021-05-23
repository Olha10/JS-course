//Assignment operators
//When need to modify variable and overwrite its value
let x = 10;
x += 10; //20
console.log(x);

//Can use also
x= x + 10; //20

//Logical operators: && (and), || (or) and ! (denial) 
//When work with condition 
// && return True if both operand equeals true
console.log(true && false && true); //false
console.log(true && true); //true
// || return true if one operator = true
console.log(true || false || false); //true
// ! oposit
console.log(!true); //false
console.log(!false); //true
//Example
const loginButton = true;
const emailField = false;
console.log(loginButton && emailField); //false
//Logical operators with non boolean 
console.log(true || false); //true
console.log(false || 'test'); //test (String->thruthy)
console.log(false || 1 || 2); //1 (logic applies only for first value after ||)
//Falsy value: false, undefined, null, 0, '' ,NaN
//Anything that is not falsy -> Thruthy

//Example
let loginPage = '/login';
let defaultPage = '/some-default-page';
let currentPage = loginPage || defaultPage;
console.log(currentPage); //login (because the first value before ||)

//Comparison operators: ">","<",">=","<=","!=","==","===" and others
// They always return boolean

//Relational
let y = 1;
console.log(y >= 1); //true
console.log (y > 0); //true
console.log(y < 1); //false
console.log (y <= 1); //true
let res = 1 < 2;
console.log(res); //true

//If types are different, JS converts the value to number
console.log('2' > 1); //true

//Depends on letter position in unicode table
console.log('Z' > 'A'); //true
console.log('CCC' > 'ccc'); false

//Equality operators 
//Strict equality
console.log(1===1); //true
console.log('1'===1); //false (different value types)
//Lose equality
console.log(1==1); //true
console.log('1'==1); //true
console.log(true==1); //true
console.log(false==0); //true

//Null and Undefined
console.log(null===undefined); //false (different type)
console.log(null==undefined); //true
console.log(2 != '2'); //false (compare only values)
console.log(2 !== '2'); //true (compare values and types)

