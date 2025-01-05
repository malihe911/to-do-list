import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const Notifications = ({ notifications }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "300px", // ارتفاع محدود برای اسکرول
        overflowY: "auto",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        p: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        اعلان ها
      </Typography>
      <Divider />
      <List>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={notification.title}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {notification.date}
                      </Typography>
                      {" — "}
                      {notification.message}
                    </>
                  }
                />
              </ListItem>
              {index < notifications.length - 1 && <Divider />}
            </React.Fragment>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary" align="center">
            اعلان های اخیر.
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default Notifications;
