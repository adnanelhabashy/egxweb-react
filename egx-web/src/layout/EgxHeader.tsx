import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./EgxHeader.css";

interface HeaderProps {
  onToggleDirection: () => void;
  isRTL: boolean;
}

const EgxHeader: React.FC<HeaderProps> = ({ onToggleDirection, isRTL }) => {
  const { t } = useTranslation();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSecondaryNavOpen, setIsSecondaryNavOpen] = useState(false);

  // Close the mega menu if the user closes the entire mobile menu
  const handleCloseMobileMenu = () => {
    setIsSecondaryNavOpen(false);
    setIsMegaMenuOpen(false);
  };

  return (
    <>
      <header className="relative h-16">
        {/* BACKGROUND PATTERN */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Repeating, rotated background */}
          <div
            className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2 transform scale-75 origin-center"
            style={{
              backgroundImage: "url('assets/images/logo.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Color overlay */}
          <div className="absolute inset-0 bg-[#05365a] opacity-90" />
          {/* Gold glowy wave overlay (animation defined in EgxHeader.css) */}
          <div className="glow-wave" />
        </div>

        {/* MAIN NAVBAR */}
        <nav className="relative z-10 p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo & Title */}
            <div className="flex items-center">
              <img
                src="assets/images/logo.png"
                alt="Logo"
                className="h-8 w-auto mr-2 drop-shadow-md sm:h-10"
              />
              <h1 className="text-lg sm:text-3xl mr-2 font-bold tracking-wide text-[#c0a46c] drop-shadow-md">
                {t("EGX")}
              </h1>
            </div>

            {/* Right side: Language Toggle + Hamburger Menu on mobile */}
            <div className="flex items-center">
              <button
                onClick={onToggleDirection}
                className="bg-[#c0a46c] font-bold text-[#08548c] px-3 py-1 rounded-full hover:shadow-lg transition duration-300 text-sm sm:text-base"
              >
                {isRTL ? "English" : "العربيه"}
              </button>
              {/* Hamburger (visible on mobile) */}
              <button
                onClick={() => setIsSecondaryNavOpen(!isSecondaryNavOpen)}
                className="sm:hidden ml-3 text-[#c0a46c] focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* DESKTOP/TABLET SECONDARY NAV (hidden on mobile) */}
      <nav className="bg-[#c0a46c] hidden sm:block">
        <div className="container mx-auto flex flex-row justify-around items-center p-2">
          <a
            href="#home"
            className="nav-link text-[#08548c] font-semibold text-sm sm:text-base"
          >
            {t("Home")}
          </a>
          <a
            href="#about"
            className="nav-link text-[#08548c] font-semibold text-sm sm:text-base"
          >
            {t("About EGX")}
          </a>
          {/* Services with Mega Menu (hover or click on desktop) */}
          <div className="relative group">
            <button className="nav-link text-[#08548c] font-semibold text-sm sm:text-base focus:outline-none">
              {t("Services")}
            </button>
            <div className="absolute left-0 rtl:left-auto rtl:right-0 top-full mt-2 min-w-[400px] bg-[rgba(192,164,108,0.85)] border-2 border-[#08548c] text-[#08548c] p-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-bold mb-2">{t("Category 1")}</h3>
                  <ul>
                    <li>
                      <a href="#service1" className="nav-link block text-sm">
                        {t("Service 1")}
                      </a>
                    </li>
                    <li>
                      <a href="#service2" className="nav-link block text-sm">
                        {t("Service 2")}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t("Category 2")}</h3>
                  <ul>
                    <li>
                      <a href="#service3" className="nav-link block text-sm">
                        {t("Service 3")}
                      </a>
                    </li>
                    <li>
                      <a href="#service4" className="nav-link block text-sm">
                        {t("Service 4")}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t("Category 3")}</h3>
                  <ul>
                    <li>
                      <a href="#service5" className="nav-link block text-sm">
                        {t("Service 5")}
                      </a>
                    </li>
                    <li>
                      <a href="#service6" className="nav-link block text-sm">
                        {t("Service 6")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="nav-link text-[#08548c] font-semibold text-sm sm:text-base"
          >
            {t("Contact")}
          </a>
        </div>
      </nav>

      {/* MOBILE MENU (Side/Full-Screen Drawer) */}
      <div
        className={`fixed inset-0 z-50 bg-[#05365a]/95 p-4 flex flex-col transform ${
          isSecondaryNavOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 sm:hidden`}
      >
        {/* Close button */}
        <button
          onClick={handleCloseMobileMenu}
          className="text-[#c0a46c] self-end mb-6 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Nav Links */}
        <a
          href="#home"
          className="nav-link text-[#c0a46c] font-semibold text-lg mb-4"
          onClick={handleCloseMobileMenu}
        >
          {t("Home")}
        </a>
        <a
          href="#about"
          className="nav-link text-[#c0a46c] font-semibold text-lg mb-4"
          onClick={handleCloseMobileMenu}
        >
          {t("About EGX")}
        </a>

        {/* Services with a click-to-toggle mega menu inside mobile drawer */}
        <div>
          <button
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="nav-link text-[#c0a46c] font-semibold text-lg mb-2 focus:outline-none"
          >
            {t("Services")}
          </button>
          {isMegaMenuOpen && (
            <div className="bg-[#c0a46c] text-[#08548c] p-4 rounded shadow-lg">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="font-bold mb-2">{t("Category 1")}</h3>
                  <ul>
                    <li>
                      <a
                        href="#service1"
                        className="nav-link block text-sm mb-1"
                        onClick={handleCloseMobileMenu}
                      >
                        {t("Service 1")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service2"
                        className="nav-link block text-sm mb-1"
                        onClick={handleCloseMobileMenu}
                      >
                        {t("Service 2")}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t("Category 2")}</h3>
                  <ul>
                    <li>
                      <a
                        href="#service3"
                        className="nav-link block text-sm mb-1"
                        onClick={handleCloseMobileMenu}
                      >
                        {t("Service 3")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service4"
                        className="nav-link block text-sm mb-1"
                        onClick={handleCloseMobileMenu}
                      >
                        {t("Service 4")}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t("Category 3")}</h3>
                  <ul>
                    <li>
                      <a
                        href="#service5"
                        className="nav-link block text-sm mb-1"
                        onClick={handleCloseMobileMenu}
                      >
                        {t("Service 5")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service6"
                        className="nav-link block text-sm mb-1"
                        onClick={handleCloseMobileMenu}
                      >
                        {t("Service 6")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <a
          href="#contact"
          className="nav-link text-[#c0a46c] font-semibold text-lg mt-4"
          onClick={handleCloseMobileMenu}
        >
          {t("Contact")}
        </a>
      </div>
    </>
  );
};

export default EgxHeader;
