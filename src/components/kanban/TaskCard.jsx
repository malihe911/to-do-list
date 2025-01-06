import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

function TaskCard({ task }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", task.id);
  };

  return (
    <Card
      sx={{
        marginBottom: 2,
        padding: 1,
        backgroundColor: "#e0f7fa",
        cursor: "grab",
      }}
      draggable
      onDragStart={handleDragStart}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Deadline: {task.deadline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Assigned: {task.assigned.join(", ")}
        </Typography>
        <Box sx={{ marginTop: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
          {task.tags.map((tag, index) => (
            <Chip key={index} label={tag} size="small" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
