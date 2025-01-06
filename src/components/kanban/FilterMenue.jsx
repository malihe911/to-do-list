import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

function FilterMenu({ setFilter }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        marginBottom: 2,
        padding: 1,
        backgroundColor: "#f9f9f9",
        borderRadius: 1,
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          onChange={handleFilterChange}
          label="Status"
          defaultValue=""
        >
          <MenuItem value="">All Statuses</MenuItem>
          <MenuItem value="To Do">To Do</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="assigned"
        label="Filter by Assignee"
        variant="outlined"
        fullWidth
        onChange={handleFilterChange}
      />
    </Box>
  );
}

export default FilterMenu;
