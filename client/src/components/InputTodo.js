import React, { useState } from "react";

const backendURL = "https://pern-todo-app-backend.onrender.com/todos";
// const backendURL = "http://localhost:5000/todos";

const InputTodo = () => {
  const [description, setDescription] = useState("Add new to-do");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`${backendURL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      setDescription("Add new to-do");
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control text-center"
          value={description}
          onClick={(e) => setDescription("")}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success ms-2">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
