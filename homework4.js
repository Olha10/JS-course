/*Завдання 1
Напишіть функцію, яка повинна повертати суму всіх чисел усередині масиву. Функція повинна враховувати позитивні та від'ємні значення
повинно вивести 5*/

const numbers = [1, -1, 2, 3];
function sumFunc(numbers) {
    if (!Array.isArray(numbers)) return;
    let sum = 0;
    numbers.forEach(each => {
        sum += each;
    });
    return sum; 
    };
    console.log(sumFunc(numbers)); 

    /*Завдання 2
Коли ви запускаєте функцію arrayFromRange, функція повинна виводити числа від мінімального до максимального значення в форматі масиву
Також ця функція повинна приймати від'ємні числа
function arrayFromRange(min, max) {
// Ваш код
}
const numbers = arrayFromRange(1, 4); // мінімальне та максимальне значення
console.log(numbers); // повинно повернути [1, 2, 3, 4]
const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // повинно повернути [-10, -9, -8]
*/
const numbers2 = [-10,-9,-8,1,2,3,4];
function arrayFromRange(numbers2) {
    
    }
