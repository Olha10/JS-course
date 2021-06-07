/*Завдання 1
Напишіть функцію, яка повинна повертати суму всіх чисел усередині масиву. Функція повинна враховувати позитивні та від'ємні значення
повинно вивести 5*/

const numbers = [1, -1, 2, 3];
function sumFunc(arr) {
    if (!Array.isArray(arr)) return; // verify input data
    let sum = 0;
    arr.forEach(each => {
        sum += each;
    });
    return sum; 
    };
    console.log(sumFunc(numbers)); 

//or
function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum
};
console.log(sum(numbers));

//or
const sum1 = (arr) => {
    let res = 0;
    for (let val of arr){
        res += val
    }
    return res
};

//or
let reduce = numbers.reduce((sum, current) => sum +current,0);
console.log(reduce);
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
function arrayFromRange(min, max){
    let length = max-min;
    let arr = new Array();
    for (let i = 0; i < length; i++){
        let a = min++;
        arr.push(a);
    }
    arr.push(max);
    return arr;
};
const numbers = arrayFromRange(1,4);
//or
function arrayFromRange(min, max){
    let resArr = [];
    for (let i = min; i <= max; resArr.push(i)); //look at the correct variant
    return arr;
};
/*Завдання 3
Потрібно створити функцію, яка повертатиме максимальне число з масиву
*/
const numbers3 = [1, 2, 3, 4, 5];
function getMax(arr) {
let max = Math.max(...arr)
return max
};
console.log(getMax(numbers3));

//or
function getMax1 (arr){
    let maxNumb = 0;
    for (let numb of arr){
        if (numb > maxNumb){
            maxNumb = numb;
        }
    }
    return maxNumb;
};
console.log(getMax1(numbers3));

/*Завдання 4
Завдання складається з 3 частин
1. На основі масиву movies потрібно повернути усі фільми, які були випущені в 2021 році з рейтингом більше 4
2. Потім відсортуйте відфільтровані раніше фільми за рейтингом у порядку спадання
3. В кінці поверніть тільки назви відсортованих фільмів по тайтлу в форматі масиву. Результат скрипта має бути ось таким - ["a", "c"]
 */
let movies = [
    {title: 'a', year: 2021, rating: 4.7},
    {title: 'b', year: 2020, rating: 4.4},
    {title: 'c', year: 2021, rating: 4.3},
    {title: 'd', year: 2021, rating: 3.9},
    ];
//1
    let movies2021 = movies.filter(function(movie) {
        return movie.year == 2021 && movie.rating > 4.0
    });
//2    
   movies2021.sort(function(a,b) {
    return b.rating - a.rating;
  });;
//3    
   let movieTitle = movies2021.map(a => a.title);
   console.log(movieTitle);

  
   
