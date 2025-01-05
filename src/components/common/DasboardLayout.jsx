import React from "react";
import { Box, Grid, Container, Typography, Paper } from "@mui/material";
import DashboardHeader from "../common/Header"; // وارد کردن کامپوننت هدر
import DashboardFooter from "../common/Footer"; // وارد کردن کامپوننت فوتر
import Sidebar from "../common/Sidebar"; // وارد کردن کامپوننت سایدبار

const DashboardLayout = ({ calendarComponent, otherComponents }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <DashboardHeader />

      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "row-reverse" }}>
        {" "}
        {/* تغییر flexDirection به "row-reverse" */}
        {/* Sidebar */}
        {/* Main content */}
        <Container maxWidth="lg" style={{ marginTop: "20px", flexGrow: 1 }}>
          <Typography variant="h4" align="center" gutterBottom>
            به نرم افزار مدیریت پروژه sprintHub خوش آمدی...
          </Typography>
          <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Grid container spacing={4} rowSpacing={2}>
              {/* سطر تقویم */}
              <Grid item xs={12}>
                <Paper
                  elevation={3}
                  sx={{
                    m: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {calendarComponent}
                </Paper>
              </Grid>

              {/* سایر کامپوننت‌ها */}
              {otherComponents.map((Component, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      m: 1,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {Component}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Sidebar />
      </Box>

      {/* Footer */}
      <DashboardFooter />
    </Box>
  );
};

export default DashboardLayout;
