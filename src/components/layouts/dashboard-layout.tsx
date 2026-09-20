import React from "react";
import Header from "@/components/ui/Header/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>
      <title>Cine Graph</title>
    <Header />
    {/* design the dashboard layout in center with tailwind */}
    <div className="flex justify-center items-center min-h-screen">
    {children}
    </div>
    </div>;
};

DashboardLayout.generateMetadata = () => {
  return {
    title: "Cine Graph",
  };
};

export default DashboardLayout;