import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const ProjectProgress = () => {
  const projects = [
    { name: "پروژه ۱", progress: 70 },
    { name: "پروژه ۲", progress: 50 },
    { name: "پروژه ۳", progress: 90 },
  ];

  return (
    <Box p={2} boxShadow={2} borderRadius={2}>
      <Typography variant="h6" gutterBottom>
        درصد پیشرفت پروژه‌ها
      </Typography>
      {projects.map((project, index) => (
        <Box key={index} mb={2}>
          <Typography variant="body1">{project.name}</Typography>
          <LinearProgress
            variant="determinate"
            value={project.progress}
            sx={{ height: 10, borderRadius: 5 }}
          />
          <Typography variant="caption">{project.progress}%</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectProgress;
