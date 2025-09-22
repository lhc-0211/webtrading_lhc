import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-full max-h-[calc(var(--app-height)-70px)] overflow-hidden bg-black">
      {/* Sidebar bên trái */}
      {/* <Sidebar /> */}
      {/* Nội dung chính */}
      <main className="flex-1 bg-black overflow-auto h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
