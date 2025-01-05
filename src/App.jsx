import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom"; // اضافه کردن RouterProvider
import router from "./Router/Router"; // فرض می‌کنیم که router در این فایل تعریف شده است

// Custom theme for overriding default MUI font
const theme = createTheme({
  typography: {
    fontFamily: "Yekan, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} /> {/* استفاده از RouterProvider */}
    </ThemeProvider>
  );
}

export default App;
