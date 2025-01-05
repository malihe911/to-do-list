import React, { useState } from "react";
import { Container, Typography, Box, Button, Modal } from "@mui/material";

// Helper function to format dates
const formatDate = (date) => date.toISOString().split("T")[0];

// Generate days of the month
const getDaysInMonth = (year, month) => {
  const days = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }
  return days;
};

const CalendarWithTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  const addTask = () => {
    const taskText = prompt("Enter task:");
    if (taskText) {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), date: formatDate(selectedDate), text: taskText },
      ]);
    }
  };

  const tasksForSelectedDate = tasks.filter(
    (task) => task.date === formatDate(selectedDate)
  );

  const today = new Date();
  const daysInMonth = getDaysInMonth(today.getFullYear(), today.getMonth());

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        تقویم وظایف من
      </Typography>

      {/* Calendar */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 1,
          mt: 3,
        }}
      >
        {daysInMonth.map((day) => (
          <Button
            key={day}
            variant={
              formatDate(day) === formatDate(selectedDate)
                ? "contained"
                : "outlined"
            }
            onClick={() => {
              setSelectedDate(day);
              setModalOpen(true);
            }}
          >
            {day.getDate()}
          </Button>
        ))}
      </Box>

      {/* Modal for tasks */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: "300px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Tasks for {formatDate(selectedDate)}
          </Typography>
          {tasksForSelectedDate.length > 0 ? (
            tasksForSelectedDate.map((task) => (
              <Typography key={task.id} variant="body1">
                - {task.text}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No tasks for this day.
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={addTask}
            sx={{ mt: 2 }}
          >
            Add Task
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default CalendarWithTasks;
