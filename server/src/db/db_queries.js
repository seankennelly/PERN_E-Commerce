const addNewTodo = 'INSERT INTO todo (description) VALUES ($1)';
const getAllTodos = 'SELECT * FROM todo';
const getTodoById = 'SELECT * FROM todo WHERE todo_id = $1';
const updateTodoById = 'UPDATE todo SET description = $2 WHERE todo_id = $1';
const deleteTodoById = 'DELETE FROM todo WHERE todo_id = $1';

module.exports = {
  addNewTodo,
  getAllTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById
};