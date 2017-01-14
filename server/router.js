const _ = require('lodash');

const Todo = require('../models/todo');
const User = require('../models/user');
const { ObjectID } = require('mongodb');

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
            .catch((e) => {
                res.status(400).send(e);
            })
    });

    app.get('/api/todos/:id', (req, res) => {
        const id = req.params.id;

        if (!ObjectID.isValid(id)) {
            res.status(404).send();
        }

        Todo.findById(id)
            .then((todo) => {
                if (!todo) {
                    return res.status(404).send();
                }
                res.send({ todo });
            })
            .catch((e) => {
                res.status(400).send(e);
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

    // DELETE
    app.delete('/api/todos/:id', (req, res) => {
        const id = req.params.id;

        if (!ObjectID.isValid(id)) {
            res.status(404).send();
        }

        Todo.findByIdAndRemove(id)
            .then((todo) => {
                if (!todo) {
                    return res.status(400).send();
                }
                res.send(todo);
            })
            .catch((e) => {
                res.status(400).send(e);
            })
    })

    // PATCH
    app.patch('/api/todos/:id', (req, res) => {
        const id = req.params.id;
        const body = _.pick(req.body, ['text', 'completed']);

        if (!ObjectID.isValid(id)) {
            res.status(404).send();
        }

        if (_.isBoolean(body.completed) && body.completed) {
            body.completedAt = new Date().getTime();
        } else {
            body.completed = false;
            body.completedAt = null;
        }

        Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
            .then((todo) => {
                if(!todo) {
                    return res.status(400).send();
                }

                res.send({ todo });
            })
            .catch((e) => {
                res.status(400).send();
            })
    })


}
