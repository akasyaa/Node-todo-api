const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var app = express();

app.use(bodyParser.json());

router(app);

app.listen(3000, () => {
    console.log('Started on port 3000.');
})

module.exports = app;

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
