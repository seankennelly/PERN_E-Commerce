import React, { useState, useEffect } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("Add new to-do");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
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
