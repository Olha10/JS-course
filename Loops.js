// For Loop
/*for (initialExpression; condition; incrementExpression) {
Code to be executed inside loop
} */

for (let i = 0; i < 3; i++) {
    //statement
    console.log('Interation:',i)
} // 0,1,2

for (let a = 0; a <3; a++) {
    if (a==1){
        continue;
    }
    console.log(a);
} //0,2

//Break Loop
for (let b = 0; b < 3; b++) {
    if (b==2) {
        break;
    }
    console.log(b);
}

/* WHILE
let i = 0;
while (condition) {
    Block code
} */
//Condition is important
let c = 0;
while (c < 3) {
    console.log(c);
    c++
}

//Do-while
let d = 0;
do {
    console.log(d);
    d++;
} while (d < 3);