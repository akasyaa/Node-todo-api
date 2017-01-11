const Todo = require('../models/todo');
const User = require('../models/user');

module.exports = (app) => {
    // POST
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
    });

    // GET
    app.get('/api/todos', (req, res) => {
        Todo.find()
            .then((todos) => {
                res.send({ todos });
            })
            .catch((err) => {
                res.send(err);
            })
    });

    app.get('/api/users', (req, res) => {
        User.find()
            .then((users) => {
                res.send({ users });
            })
            .catch((err) => {
                res.send(err);
            })
    })


}
