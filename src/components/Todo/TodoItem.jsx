import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <StyledListItem>
      <div>
        <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
        <Typography
          variant="body1"
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text}
        </Typography>
      </div>
      <IconButton color="secondary" onClick={() => onDelete(task.id)}>
        <DeleteIcon />
      </IconButton>
    </StyledListItem>
  );
};

export default TodoItem;
