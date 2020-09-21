let database = require("../models");

exports.getTodos = (req, res) =>
{
    database.Todo.find()
    .then((todos) =>
    {
        res.json(todos);
    })
    .catch((error) =>
    {
        res.send(error);
    });
}

exports.createTodo = (req, res) =>
{   
    database.Todo.create(req.body)
    .then((newTodo) =>
    {   
        res.status(201).json(newTodo);// created
    })
    .catch((error) =>
    {   
        res.send(error);
    })
}

exports.showTodo = (req, res) =>
{
    database.Todo.findById(req.params.todoId)
    .then((foundTodo) =>
    {
        res.json(foundTodo);
    })
    .catch((error) =>
    {
        res.send(error);
    });
}

exports.updateTodo = (req, res) =>
{
    database.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then((updatedTodo) =>
    {
        res.json(updatedTodo);
    })
    .catch((error) =>
    {
        res.send(error);
    });
}

exports.deleteTodo = (req, res) =>
{
    database.Todo.remove({_id: req.params.todoId})
    .then(() =>
    {
        res.json({message: "We deleted it!"});
    })
    .catch((error) =>
    {
        res.send(error);
    });
}

module.exports = exports;