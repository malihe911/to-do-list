import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../Screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
]);

export default router;
