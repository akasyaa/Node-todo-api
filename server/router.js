const Todo = require('../models/todo');
const User = require('../models/user');

module.exports = (app) => {
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
}
