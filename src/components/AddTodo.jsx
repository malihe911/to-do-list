import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <FormContainer>
      <TextField
        variant="outlined"
        label="Add a new task"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
    </FormContainer>
  );
};

export default AddTodo;
