const mongoose = require('mongoose');

const Todo = require('../models/todo');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const newTodo = new Todo({
    text: 'Study'
});

newTodo.save()
    .then((doc) => {
        console.log('Saved todo', doc);
    })
    .catch((err) => {
        console.log(err);
    });
