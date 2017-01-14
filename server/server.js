require('./config');

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

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
