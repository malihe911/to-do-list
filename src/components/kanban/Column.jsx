import React from "react";
import TaskCard from "./TaskCard";
import { Box, Typography, Paper } from "@mui/material";

function Column({ title, tasks, onDragEnd }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text");
    onDragEnd(Number(taskId), title);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: 2,
        borderRadius: 1,
        minWidth: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        {title}
      </Typography>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: "#ffffff",
          flexGrow: 1,
          overflowY: "auto",
          padding: 1,
        }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Paper>
    </Box>
  );
}

export default Column;
