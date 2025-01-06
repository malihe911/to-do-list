import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import ProjectIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "داشبورد اصلی", icon: <DashboardIcon />, path: "/" },
    { text: "کانبان برد", icon: <AssignmentIcon />, path: "/kanban-board" },
    { text: "مدیریت کارگاه‌ها", icon: <BuildIcon />, path: "/workshops" },
    { text: "تقویم من", icon: <CalendarTodayIcon />, path: "/my-calendar" },
    { text: "پروژه‌ها", icon: <ProjectIcon />, path: "/projects" },
    { text: "تنظیمات", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          borderLeft: "1px solid rgba(0, 0, 0, 0.12)",

          position: "fixed", // استفاده از position relative
        },
      }}
      PaperProps={{
        style: {
          position: "relative", // اطمینان از تنظیم position به relative در PaperProps
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
