let post = {
        title: 'Some title',
        body: 'Some body',
        author: 'some author',
        views: 100,
        comment: {
            firstName: 'Olha',
            lastName: 'Kravchenko',
            body: 'Some comment body'
        },
        isLive: true,
        someFunction: function result() {
            console.log('my function works')
        }
    };

    //1.2 Отримайте довжину об'єкта post 
     
    let objLength = Object.keys(post).length;
    console.log(objLength);

//і напишіть скрипт, який повинен повернути список значень ключів об'єкта "post"
    let valueFunc = () => { let values = Object.values(post) 
        console.log(values)};
    valueFunc();

/*2. Напишіть функцію "helloColleagues", яка повинна приймати два параметри "company" і "team" і повинна повертати стрінгу 
- "Я працюю в "company" компанії в чудовій команді " team "` .
 Використовуйте синтаксис темплейт стрінгів для параметризації змінних всередині стрінги - ``*/
 let helloColleagues = (company, team) => {
     console.log(`Я працюю в ${company} в чудовій команді ${team}.`);
 };
 helloColleagues('Somecompany','Someteam');

 /*2.1) Напишіть функцію isEmpty (obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.
Повинна працювати так:*/
let schedule = {};
let isEmpty = (obj) => {
        if (Object.keys(obj).length == 0) {
            return true; 
        }
        else {
            return false
        }
};
console.log(isEmpty(schedule));

//or
function isEmpty1(obj){
    return Object.keys(obj).length == 0 ? true : false;
};

//or
function isEmpty2(obj){
    for (let keys in obj){
        return false;
    }
    return true;
};

/*2.2) Напишіть функцію, яка приймає два числа і повертає максимальне з двох переданих чисел. 
Потрібно обробити і від"ємні значення
function maxNumber (a, b) {
// ваш код
}
maxNumber (1, 2) // 2*/
let maxNumber = (a, b) => {
    if (a,b >= 0) {
        return (Math.max(a,b))
    }
    else {
        return 'Only positive values can be accepted'
    }
    };
    console.log(maxNumber(1,2));

//or

function maxNumber1(a, b) {
    if (a >= b)
    return a;
    else
    return b;
};
console.log(maxNumber1(1, -1));

//or
function maxNumber2(a, b){
    if (a && b){
        return a > b ? a : b
    } else {
        return 'Type valid data'
    }
};

/*3) Є об’єкт в якому зберігається зарпати кількох колег:
Напишіть функцію, яка підсумує всі зарплати і повертає це значення. У прикладі вище результат має бути 1000.*/
let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 };
let sum = 0;
let sumSalaries = (obj) => {
    for (let key in obj) {
    sum += obj[key];
     };
 return sum;
};
console.log(sumSalaries(salaries));

/*3.1) Є об’єкт в якому зберігається зарпати кількох колег:
Напишіть функцію, яка повертає ім’я та значення працівника, який отримує найбільшу зарплату.*/

let maxSalary = () => {
    let obj = Object.values(salaries);
    let max = Math.max(...obj);
return console.log(max);
};

//or
function maxSalary1(obj){
    let highestValue = 0;
    let keyName;
    for (let key in obj){
        if (obj[key] > highestValue){
            highestValue = obj[key];
            keyName = key;
        }
    }
    return `${keyName} salary is ${highestValue}`
};
console.log(maxSalary1(salaries));

/*3.2) Створіть функцію multiplyNumeric (obj), яка помножує всі числові властивості об"єкта на 2
// після виклику функції  multiplyNumeric - menu = { width: 400, height: 600, title: "My menu" }; 
Майте на увазі  multiplyNumeric не повинна повертати нічого. Вона повинна модифікувати об"єкт на місці
P.S. Використовуйте typeof метод для перевірки типу значень. */
let menu = { width: 200, height: 300, title: "My menu" };
let multiplyNumeric = (obj) => {
for (let key in obj)
{if (typeof(obj[key]) == "number")
 { obj[key] *=2; }
}
};
console.log(multiplyNumeric(menu));