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
        className="
        min-h-screen
        flex
        flex-col
        bg-gradient-to-b
        from-[#fff8ec]
        to-[#fcebd0]
        text-[#05365a]
        leading-relaxed
      "
      >
        <EgxHeader onToggleDirection={toggleDirection} isRTL={isRTL} />

        <main className="relative flex-grow">
          <div className="absolute inset-x-0 top-0 overflow-hidden">
            <svg
              className="text-[#fff8ec]"
              preserveAspectRatio="none"
              viewBox="0 0 1440 320"
            >
              <path
                fill="currentColor"
                d="M0,192L48,192C96,192,192,192,288,186.7C384,181,480,171,576,160C672,149,768,139,864,165.3C960,192,1056,256,1152,250.7C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </svg>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Translucent Content Box */}
            <div className="bg-white/100 backdrop-blur-md p-8 rounded-lg shadow-2xl">
              <Outlet />
            </div>
          </div>
        </main>
        <EgxFooter />
      </div>
    </>
  );
}
