const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

const model = mongoose.model('Todo', todoSchema);

module.exports = model;
