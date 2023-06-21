import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import React from "react";

interface MobileLayoutProps {
  children?: React.ReactNode;
}

const Dashboard = async ({ children }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen flex antialiased ">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="px-4 flex-1 relative h-screen overflow-scroll overflow-x-hidden  ">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
