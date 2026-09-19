import Head from 'next/head';
import React from "react";
import Header from "@/components/ui/Header/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>
    <Head>
      <title>Cine Graph</title>
    </Head>
    <Header />
    {/* design the dashboard layout in center with tailwind */}
    <div className="flex justify-center items-center min-h-screen">
    {children}
    </div>
    </div>;
};

export default DashboardLayout;