const mongoose = require('mongoose');

const Todo = require('../models/todo');
const User = require('../models/user');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const newTodo = new Todo({
    text: 'proper todo'
});

const newUser = new User({
    email: 'akasyashc@gmail.com'
})

newUser.save()
    .then((doc) => {
        console.log('Saved data', doc);
    })
    .catch((err) => {
        console.log(JSON.stringify(err, undefined, 2));
    });
