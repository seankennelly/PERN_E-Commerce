import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";
// Remove this if it doesn't work
const backendURL = "https://pern-todo-app-backend.onrender.com/todos";
// const backendURL = "http://localhost:5000/todos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(`${backendURL}`);
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (todoId) => {
    try {
      await fetch(`${backendURL}/${todoId}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== todoId));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <table className="table table-striped mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
