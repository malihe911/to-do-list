import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const OpenTasks = () => {
  const data = {
    labels: ["وظایف انجام‌شده", "وظایف در حال انجام", "وظایف باز"],
    datasets: [
      {
        label: "وظایف",
        data: [50, 30, 20],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <Box p={2} boxShadow={2} borderRadius={2}>
      <Typography variant="h6" gutterBottom>
        وظایف باز
      </Typography>
      <Pie data={data} options={options} />
    </Box>
  );
};

export default OpenTasks;
