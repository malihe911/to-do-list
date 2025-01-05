import React from "react";
import { Container, Typography } from "@mui/material";
import Notifications from "./Notifications";

const NotificationsExample = () => {
  const notifications = [
    {
      title: "Task Completed",
      message: "You have successfully completed a task.",
      date: "2025-01-04",
    },
    {
      title: "New Task Added",
      message: "A new task has been added to your list.",
      date: "2025-01-03",
    },
    {
      title: "Reminder",
      message: "Don't forget to complete your tasks for today!",
      date: "2025-01-02",
    },
  ];

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        آخرین اعلان ها
      </Typography>
      <Notifications notifications={notifications} />
    </Container>
  );
};

export default NotificationsExample;
