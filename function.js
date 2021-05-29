function sayHello () {
    console.log('Hello');
}
//Call a function
sayHello();

function sayHello1 (){
    let message = 'Hello!!!'
    console.log(message);
}
sayHello1();
//console.log(message); - error, this variable is local to the function
// But if was "var" instead of 'let' in function, we can use it

function sayHello2(userName) {
    let message = 'Hello, ' + userName;
    console.log(message);
}
sayHello2('John');

//Parameter can have default value
function sayHello3(userName = 'John') {
    let message = 'Hello, ' + userName;
    console.log(message);
}
sayHello3();

function sayHello4(userName = 'John') {
    if (userName == undefined) {
        userName = 'John';
    }
    let message = 'Hello, ' + userName;
    console.log(message);
}
sayHello4();
 
//To get ddefaul value use undefined
//sayHello(undefined, 'John'); - the first value will be default

//RETURN
function sayHello5(greeting = 'Hello, ', userName = 'John') {
    let message = greeting + userName;
    console.log(message);
    return message;
}
let a = sayHello5();
console.log(a);

function sayHello6(greeting = 'Hello, ', userName = 'John') {
    if (greeting){
        return 'True';
    }
    else {
        return 'False'
    }
};
let b = sayHello6();
console.log(a);

//Return function inside function
function sayHello7(greeting = 'Hello, ', userName = 'John') {
    console.log(greeting)
    function sayReplay() {
        let message = `Hi ${userName}`;
        console.log(message);
        return message;
    }
    return sayReplay;
}
let sayReplay = sayHello7(); //return function as result
console.log(sayReplay());
sayHello7()();

//Arrow function
let arrowFunc = (parameter1, parameter2) => {
    return parameter1 + parameter2;
};
//the same
let arrowFunc = (parameter1, parameter2) => parameter1 + parameter2;