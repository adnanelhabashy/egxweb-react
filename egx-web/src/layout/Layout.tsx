// src/components/Layout.tsx (or src/layout/Layout.tsx)
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
//import Header from "../components/Header";
// import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import EgxHeader from "./EgxHeader";
import EgxFooter from "./EgxFooter";
export default function Layout() {
  const { i18n } = useTranslation();

  const [isRTL, setIsRTL] = useState(false);

  const toggleDirection = () => {
    setIsRTL(!isRTL);

    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    // Adjust the document direction for RTL languages:
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="min-h-screen flex flex-col bg-gray-100 text-gray-800"
      >
        <EgxHeader onToggleDirection={toggleDirection} isRTL={isRTL} />

        <main className="flex-grow">
          <Outlet />
        </main>
        <EgxFooter />
      </div>
    </>
  );
}
