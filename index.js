const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://danbmathew:YMXvnq1fY0RBSSPn@cluster0.nl2viyq.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Todo = mongoose.model('Todo', { text: String });

app.use(express.json());

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const { test } = req.body;
    const todo = new Todo({ text });
    await todo.save();
    res.status(201).json(todo);
});

app.listen(PORT, () => {
    console.log(`Connection Done, Server running on port ${PORT}`);
});

