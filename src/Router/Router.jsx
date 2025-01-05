import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/common/DasboardLayout";
import DashboardPage from "../Screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/", // مسیر والد
    element: <DashboardLayout />, // لایه اصلی
    children: [
      {
        path: "/", // صفحه اصلی داشبورد
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
