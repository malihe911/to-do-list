import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./Todolist";

function TodoManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <AddTodo onAdd={addTask} />
      <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </>
  );
}

export default TodoManager;
