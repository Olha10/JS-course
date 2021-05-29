//1 ex.
let age = 19;
const ternarCondition = (age>=18 && age<=90) ? true : false;
console.log(ternarCondition);

//2 ex.
let name = prompt("Будь ласка, введіть своє ім'я");
if (name){
    alert (`Привіт, ${name} , приємно познайомитися.`);
} else {
    alert('Please type valid name');
}
let birthday = prompt("Будь ласка, введіть рік народження");
if (birthday){
    const currentYear = new Date();
    let age = currentYear.getFullYear() - birthday;
    alert (`Вам ${age} років`);
} else {
    alert('Please type valid birthday');
}


//3 ex.
let num = 92;
if (num < 60){
    console.log('F')
}
else if (num < 70){
    console.log('D')
}
else if (num < 80){
    console.log('C')
}
else if (num < 90){
    console.log('B')
}
else if (num < 100){
    console.log('A')
};

//4 ex.
let language = 'chinese';
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place')   
        break;
    case 'hindi':
        console.log('Number 4')   
            break; 
    case 'arabic':
            console.log('5th most spoken language')   
            break;
    default:
        console.log('Great language too :D'); 
};