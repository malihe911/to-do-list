import React from "react";
import Column from "./Column";
import FilterMenu from "./FilterMenue";
import { Box, Grid } from "@mui/material";

const initialTasks = [
  {
    id: 1,
    title: "Task 1",
    deadline: "2025-01-10",
    assigned: ["John"],
    tags: ["High Priority"],
    status: "To Do",
  },
  {
    id: 2,
    title: "Task 2",
    deadline: "2025-01-11",
    assigned: ["Jane"],
    tags: ["Bug Fix"],
    status: "In Progress",
  },
  {
    id: 3,
    title: "Task 3",
    deadline: "2025-01-12",
    assigned: ["Alice"],
    tags: ["Low Priority"],
    status: "Done",
  },
];

function Kanban() {
  const [tasks, setTasks] = React.useState(initialTasks);
  const [filter, setFilter] = React.useState({});

  const handleDragEnd = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter.status && task.status !== filter.status) return false;
    if (filter.assigned && !task.assigned.includes(filter.assigned))
      return false;
    return true;
  });

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <FilterMenu setFilter={setFilter} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Column
            title="To Do"
            tasks={filteredTasks.filter((task) => task.status === "To Do")}
            onDragEnd={handleDragEnd}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column
            title="In Progress"
            tasks={filteredTasks.filter(
              (task) => task.status === "In Progress"
            )}
            onDragEnd={handleDragEnd}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column
            title="Done"
            tasks={filteredTasks.filter((task) => task.status === "Done")}
            onDragEnd={handleDragEnd}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Kanban;
