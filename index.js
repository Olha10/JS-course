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

// console.log(post.comment.body);
// console.log(post['comment']['body']);
//     console.log(post.someFunction());
//     console.log(post['someFunction']());

function getValues (post) {
    console.log(post);
}