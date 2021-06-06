// let post = {
//     title: 'Some title',
//      body: 'Some body',
//     author: 'some author',
//     views: 100,
// comment: {
//     firstName: 'Olha',
//     lastName: 'Kravchenko',
//     body: 'Some comment body'
// },
// isLive: true,
// someFunction: function result() {
//     console.log('my function works')
// }
// };

// let post = [
//     10,
//     true,
//     'Title',
//     undefined,
//     function someFunc(){
//         console.log('Hi')
//     },
//     [{name: 'Olha'},{}]
// ];
// /*- Get the first and last array value
// - Get value of the function by array index and log value
// - Get value of "array of objects" by array index and log value
// */ 
// let a = post[0];
// console.log(a);
// let b = post[post.length - 1];
// console.log(b);
// console.log(post[4]());
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
};
