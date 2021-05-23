//Arithmetic Operators

let x = 2;
let y = 2;
//Construction (x+y) is called expression
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
//"**" exaltation in degree
console.log(x**y);

let b = "test" + " test";
console.log(b);
//the number is converted to a string if operator is "+"
console.log("2"+ 3); //23

//the String is converted to a number if operator is "-","*","/","**"
console.log('2'/2); //1
console.log(2 * '2a'); //NaN

//Unar Operators
let c = 1;
console.log(+c); //1

let d = -1;
console.log(+d); //-1

//Unar _ convert String to number. 
//If String has non-number symbol, NaN will return
let g = '1';
console.log(+g + 3); //+g = 1

//Increment/Decrement
// There are 2 types '++' and '--'

let v = 2;
let z = 2;
console.log(++v); //1+2=3 - prefix increment
//If '++' after variable, increment will increase by 1 after re-call variable 
console.log(v++); //3 - post increment
console.log(v); //4

//But non-number are converted
console.log(+true); //1
console.log(+false); //0
