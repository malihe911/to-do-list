import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/common/DasboardLayout";
import DashboardPage from "../Screens/Dashboard";
import Kanban from "../components/kanban/kanban";
import Workshop from "../components/Workshop/Workshop";
import Projects from "../components/projects/Projects";

const router = createBrowserRouter([
  {
    path: "/", // مسیر والد
    element: <DashboardLayout />, // لایه اصلی
    children: [
      {
        path: "/", // صفحه اصلی داشبورد
        element: <DashboardPage />,
      },
      {
        path: "/kanban", // صفحه اصلی داشبورد
        element: <Kanban />,
      },
      {
        path: "/workshop", // صفحه اصلی داشبورد
        element: <Workshop />,
      },
      {
        path: "/projects", // صفحه اصلی داشبورد
        element: <Projects />,
      },
    ],
  },
]);

export default router;
