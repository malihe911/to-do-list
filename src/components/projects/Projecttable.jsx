// ProjectTable.js
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Switch,
  Box,
  Typography,
} from "@mui/material";
import ProgressBar from "./ProgressBar";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "16px",
  backgroundColor: theme.palette.grey[200],
}));

const ProjectTable = ({ projects, handleStatusChange }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>عنوان پروژه</StyledTableCell>
            <StyledTableCell>درصد پیشرفت</StyledTableCell>
            <StyledTableCell>وضعیت</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell>{project.title}</TableCell>
              <TableCell>
                <ProgressBar progress={project.progress} />
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" sx={{ mr: 2 }}>
                    {project.status === "active" ? "فعال" : "غیرفعال"}
                  </Typography>
                  <Switch
                    checked={project.status === "active"}
                    onChange={() => handleStatusChange(index)}
                    color="primary"
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTable;
