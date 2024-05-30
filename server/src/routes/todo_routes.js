const express = require('express');
const { Router } = require('express');
const controller = require('../controllers/todo_controller');

const router = Router();
//  Allows access to req.body data
router.use(express.json());

// ROUTES
//create todo
router.post('/', controller.addNewTodo);

//get all todos
router.get('/', controller.getAllTodos);

// get one todo
router.get('/:todoId', controller.getTodoById);

// update todo
router.put('/:todoId', controller.updateTodoById);

// delete todo
router.delete('/:todoId', controller.deleteTodoById);


module.exports = router; 