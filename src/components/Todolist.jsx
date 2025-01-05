import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onToggle, onDelete }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default TodoList;
