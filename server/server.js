const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const Todo = require('../models/todo');
const User = require('../models/user');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var app = express();

app.use(bodyParser.json());

app.post('/api/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((data) => {
            res.send(data);
        })
        .catch((e) => {
            res.status(400).send(e);
        })
});

app.post('/api/users', (req, res) => {
    const user = new User({
        email: req.body.email
    })

    user.save()
        .then((data) => {
            res.send(data);
        })
        .catch((e) => {
            res.status(400).send(e);
        })
})

app.listen(3000, () => {
    console.log('Started on port 3000.');
})

// const newTodo = new Todo({
//     text: 'proper todo'
// });
//
// const newUser = new User({
//     email: 'akasyashc@gmail.com'
// })
//
// newUser.save()
//     .then((doc) => {
//         console.log('Saved data', doc);
//     })
//     .catch((err) => {
//         console.log(JSON.stringify(err, undefined, 2));
//     });
