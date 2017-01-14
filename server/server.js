const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const env = process.env.NODE_ENV || 'development';

console.log('env:', env);

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

router(app);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
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
