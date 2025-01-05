import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import CalendarWithTasks from "../components/calendar";
import TodoManager from "../components/TodoManager";
import ActiveWorkshops from "../components/charts/Barchart";
import OpenTasks from "../components/charts/PieChart";
import ProjectProgress from "../components/charts/LinearProgressBar";
import NotificationsExample from "../components/notifications/NotificationsManagement";
import QuickLinksExample from "../components/QuikLinks/QuikLinkExamlpe";

const DashboardPage = () => {
  const components = [
    { component: <TodoManager />, key: "todoManager" },
    { component: <ActiveWorkshops />, key: "activeWorkshops" },
    { component: <OpenTasks />, key: "openTasks" },
    { component: <ProjectProgress />, key: "projectProgress" },
    { component: <NotificationsExample />, key: "notificationsExample" },
    { component: <QuickLinksExample />, key: "quickLinksExample" },
  ];

  return (
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
            <CalendarWithTasks />
          </Paper>
        </Grid>

        {/* سایر کامپوننت‌ها */}
        {components.map(({ component, key }) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
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
              {component}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardPage;
