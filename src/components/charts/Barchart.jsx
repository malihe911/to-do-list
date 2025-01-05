import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Typography } from "@mui/material";

// Register the required modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActiveWorkshops = () => {
  const data = {
    labels: ["کارگاه ۱", "کارگاه ۲", "کارگاه ۳", "کارگاه ۴"],
    datasets: [
      {
        label: "تعداد فعالیت‌ها",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <Box p={2} boxShadow={2} borderRadius={2}>
      <Typography variant="h6" gutterBottom>
        تعداد کارگاه‌های فعال
      </Typography>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default ActiveWorkshops;
