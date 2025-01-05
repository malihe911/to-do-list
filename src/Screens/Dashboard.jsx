// DashboardPage.js
import React from "react";
import TodoManager from "../components/TodoManager";
import ActiveWorkshops from "../components/charts/Barchart";
import OpenTasks from "../components/charts/PieChart";
import ProjectProgress from "../components/charts/LinearProgressBar";
import NotificationsExample from "../components/notifications/NotificationsManagement";
import QuickLinksExample from "../components/QuikLinks/QuikLinkExamlpe";
import DashboardLayout from "../components/common/DasboardLayout";
import CalendarWithTasks from "./../components/calendar";

function DashboardPage() {
  const calendarComponent = <CalendarWithTasks />;
  const otherComponents = [
    <TodoManager key="todoManager" />,
    <ActiveWorkshops key="activeWorkshops" />,
    <OpenTasks key="openTasks" />,
    <ProjectProgress key="projectProgress" />,
    <NotificationsExample key="notificationsExample" />,
    <QuickLinksExample key="quickLinksExample" />,
  ];

  return (
    <DashboardLayout
      calendarComponent={calendarComponent}
      otherComponents={otherComponents}
    />
  );
}

export default DashboardPage;
