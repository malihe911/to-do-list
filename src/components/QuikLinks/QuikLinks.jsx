import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Work, Folder, Settings } from "@mui/icons-material";

const QuickLinks = ({ links }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        دسترسی سریع
      </Typography>
      {links.map((link, index) => (
        <Button
          key={index}
          variant="outlined"
          color="primary"
          startIcon={link.icon}
          onClick={() => window.alert(`Navigating to ${link.label}`)} // جایگزین کنید با تابع ناوبری
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            textTransform: "none",
          }}
        >
          {link.label}
        </Button>
      ))}
    </Box>
  );
};

export default QuickLinks;
