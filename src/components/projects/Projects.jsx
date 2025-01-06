// Projects.js
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import ProjectTable from "./Projecttable";

const initialProjectData = [
  { title: "پروژه ۱", progress: 70, status: "active" },
  { title: "پروژه ۲", progress: 40, status: "inactive" },
  { title: "پروژه ۳", progress: 90, status: "active" },
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjectData);

  const handleStatusChange = (index) => {
    setProjects((prevProjects) =>
      prevProjects.map((project, idx) =>
        idx === index
          ? {
              ...project,
              status: project.status === "active" ? "inactive" : "active",
            }
          : project
      )
    );
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        پروژه‌ها
      </Typography>
      <ProjectTable
        projects={projects}
        handleStatusChange={handleStatusChange}
      />
    </Container>
  );
};

export default Projects;
