const expect = require('expect');
const request = require('supertest');

const app = require('../server/server');
const Todo = require('../models/todo');

xdescribe('POST /api/todos', () => {
    beforeEach((done) => {
        Todo.remove({})
            .then(() => done());
    });

    it('should create a new todo', (done) => {
        const text = 'Test text';

        request(app)
            .post('/api/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find()
                    .then((todos) => {
                        expect(todos.length).toBe(1);
                        expect(todos[0].text).toBe(text);
                        done();
                    })
                    .catch((err) => {
                        return done(err);
                    })
            });
    });

    it('should not create todo with invalid data', (done) => {
        request(app)
            .post('/api/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find()
                    .then((todos) => {
                        expect(todos.length).toBe(0);
                        done();
                    })
                    .catch((err) => {
                        return done(err);
                    })
            })
    });
});

describe('GET api/todos', () => {
    it('should return all todos')
});
