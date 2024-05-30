const pool = require('../db/db');
const queries = require('../db/db_queries');

const addNewTodo = async (req, res) => {
  try {
    const { description } = req.body;
    await pool.query(queries.addNewTodo, [description]);
    res.status(201).send('New todo added');
  } catch (error) {
    console.error(error.message);
  }
};

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query(queries.getAllTodos);
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message)
  }
};

const getTodoById = async (req, res) => {
  try {
    const todoId = parseInt(req.params.todoId);
    const foundById = await pool.query(queries.getTodoById, [todoId]);
    res.json(foundById.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

const updateTodoById = async (req, res) => {
  try {
    const todoId = parseInt(req.params.todoId);
    const newDescription = req.body.description;
    await pool.query(queries.updateTodoById, [todoId, newDescription]);
    res.status(200).send("Todo updated successfully");
  } catch (error) {
    console.error(error.message);
  }
};

const deleteTodoById = async (req, res) => {
  try {
    const todoId = parseInt(req.params.todoId);
    await pool.query(queries.deleteTodoById, [todoId]);
    res.status(204).send('Todo removed');
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  addNewTodo,
  getAllTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById
};