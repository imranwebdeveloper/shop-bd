import Sidebar from "@/components/Sidebar";
import React from "react";

interface MobileLayoutProps {
  children?: React.ReactNode;
}

const Dashboard = async ({ children }: MobileLayoutProps) => {
  //   const data: any = await getCurrentUser();
  return <Sidebar>{children}</Sidebar>;
};

export default Dashboard;
