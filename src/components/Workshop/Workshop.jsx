import React from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { Add, Delete, Edit, UploadFile } from "@mui/icons-material";

function DetailsTab() {
  return (
    <Box p={3}>
      <Typography variant="h6">Workshop Details</Typography>
      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        <TextField label="Title" fullWidth />
        <TextField label="Description" fullWidth multiline rows={3} />
        <TextField label="Instructor" fullWidth />
        <TextField
          label="Start Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField label="Capacity" type="number" fullWidth />
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
}

function ParticipantsTab() {
  return (
    <Box p={3}>
      <Typography variant="h6">Participants</Typography>
      <Box mt={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example Rows */}
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Student</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <Edit />
                </IconButton>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button variant="contained" startIcon={<Add />} sx={{ mt: 2 }}>
          Add Participant
        </Button>
      </Box>
    </Box>
  );
}

function TasksTab() {
  return (
    <Box p={3}>
      <Typography variant="h6">Tasks</Typography>
      <Box mt={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Assignee</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example Rows */}
            <TableRow>
              <TableCell>Create Slides</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <Edit />
                </IconButton>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button variant="contained" startIcon={<Add />} sx={{ mt: 2 }}>
          Add Task
        </Button>
      </Box>
    </Box>
  );
}

function ResourcesTab() {
  return (
    <Box p={3}>
      <Typography variant="h6">Resources</Typography>
      <Box mt={2}>
        <Button variant="contained" startIcon={<UploadFile />}>
          Upload Resource
        </Button>
        <Table sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example Rows */}
            <TableRow>
              <TableCell>WorkshopNotes.pdf</TableCell>
              <TableCell>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

function Workshop() {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Details" />
        <Tab label="Participants" />
        <Tab label="Tasks" />
        <Tab label="Resources" />
      </Tabs>
      {currentTab === 0 && <DetailsTab />}
      {currentTab === 1 && <ParticipantsTab />}
      {currentTab === 2 && <TasksTab />}
      {currentTab === 3 && <ResourcesTab />}
    </Box>
  );
}

export default Workshop;
