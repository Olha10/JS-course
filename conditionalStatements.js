//IF/ELSE
/*if (condition){
    //block of code
    statement;
    statement;
    statement;
}
else if (anotherCondition){
    statement;
}
else
statement;
//Can see how it work in browser
let res = prompt("Test");
if (res == 'yes'){
alert('Hi')
} 
else {
    console.log('Hello',res);
    };


//Example with time
let hour = 20;
if (hour >= 6 && hour < 12) {
    console.log('Good morning!');
}
else if (hour >=12 && hour <18) {
    console.log('Good afternoon!');
}
else {
    console.log('Good evening!');
}*/

//Ternary opeerator - const ternarCond = "some condition" ? true value : false value
let name = 'Test';
let matchName = name == 'Test' ? true : false;
console.log(matchName);

//SWITCH/CASE
let role;
switch (role) {
    case 'guest':
        console.log('Login Guest user');
        break;
    case 'admin':
        console.log('Login Admin user');
        break;
    default:
        console.log('Login Unknown user'); //this, because role = undefined    
}

//break is important

//Grouping same cases
let a = 2 + 2;
switch (a){
    case 4:
        console.log('Yes');
        break;
    case 3:
    case 5:
    console.log('No');
        break;
    default:
        console.log('Do not recognize');            
}

//Convert
console.log(typeof Number('22')); //number
console.log(typeof Boolean(1)); //true
console.log(typeof String(0)); //String