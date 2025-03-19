// src/components/Layout.tsx (or src/layout/Layout.tsx)
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const [isRTL, setIsRTL] = useState(false);

  const toggleDirection = () => {
    setIsRTL(!isRTL);
  };
  return (
    <>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="min-h-screen flex flex-col bg-gray-100 text-gray-800"
      >
        <Header onToggleDirection={toggleDirection} isRTL={isRTL} />

        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
