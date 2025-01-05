import React from "react";
import { Box, Container } from "@mui/material";
import DashboardHeader from "./Header";
import DashboardFooter from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <DashboardHeader />

      {/* Main Content */}
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "row-reverse" }}>
        {/* Sidebar */}

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ mt: 3, flexGrow: 1 }}>
          <Outlet />
        </Container>
        <Sidebar />
      </Box>

      {/* Footer */}
      <DashboardFooter />
    </Box>
  );
};

export default DashboardLayout;
