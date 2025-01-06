// Import necessary components and hooks
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Dashboard Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          SprintHub
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            mr: 2,
          }}
        >
          <SearchIcon sx={{ position: "absolute", left: 8, color: "gray" }} />
          <InputBase
            placeholder="Search..."
            sx={{
              pl: 4,
              pr: 2,
              py: 0.5,
              backgroundColor: "white",
              borderRadius: 1,
              width: 200,
              boxShadow: 1,
            }}
          />
        </Box>

        {/* Profile Dropdown */}
        <Box>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar alt="User Profile" src="/path-to-avatar.jpg" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
