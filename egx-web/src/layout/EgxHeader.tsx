import React from "react";
import { useTranslation } from "react-i18next";
import "./EgxHeader.css";

interface HeaderProps {
  onToggleDirection: () => void;
  isRTL: boolean;
}

const EgxHeader: React.FC<HeaderProps> = ({ onToggleDirection, isRTL }) => {
  const { t } = useTranslation();

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
                className="h-10 w-auto mr-2 drop-shadow-md"
              />
              <h1 className="text-3xl font-bold tracking-wide text-[#c0a46c] drop-shadow-md">
                {t("EGX")}
              </h1>
            </div>
            {/* Language Toggle Button */}
            <button
              onClick={() => onToggleDirection()}
              className="bg-[#c0a46c] font-bold text-[#08548c] px-4 py-2 rounded-full hover:shadow-lg transition duration-300 ml-auto rtl:mr-auto rtl:ml-0"
            >
              {isRTL ? "English" : "العربيه"}
            </button>
          </div>
        </nav>
      </header>

      {/* SECONDARY NAVIGATION BAR */}
      <nav className="bg-[#c0a46c]">
        <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center p-1 relative">
          <a
            href="#home"
            className="nav-link text-[#08548c] font-semibold transition-colors duration-300"
          >
            {t("Home")}
          </a>
          <a
            href="#about"
            className="nav-link text-[#08548c] font-semibold transition-colors duration-300"
          >
            {t("About")}
          </a>
          {/* Services with Mega Menu */}
          <div className="relative group">
            <button className="nav-link text-[#08548c] font-semibold transition-colors duration-300 focus:outline-none">
              {t("Services")}
            </button>
            {/* Mega Menu Dropdown */}
            <div className="absolute left-0 rtl:left-auto rtl:right-0 top-full mt-2 min-w-[400px] bg-[rgba(192,164,108,0.85)] border-2 border-[#08548c] text-[#08548c] p-6 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Parent Category 1 */}
                <div>
                  <h3 className="font-bold mb-2">{t("Category 1")}</h3>
                  <ul>
                    <li>
                      <a href="#service1" className="nav-link block">
                        {t("Service 1")}
                      </a>
                    </li>
                    <li>
                      <a href="#service2" className="nav-link block">
                        {t("Service 2")}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Parent Category 2 */}
                <div>
                  <h3 className="font-bold mb-2">{t("Category 2")}</h3>
                  <ul>
                    <li>
                      <a href="#service3" className="nav-link block">
                        {t("Service 3")}
                      </a>
                    </li>
                    <li>
                      <a href="#service4" className="nav-link block">
                        {t("Service 4")}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Parent Category 3 */}
                <div>
                  <h3 className="font-bold mb-2">{t("Category 3")}</h3>
                  <ul>
                    <li>
                      <a href="#service5" className="nav-link block">
                        {t("Service 5")}
                      </a>
                    </li>
                    <li>
                      <a href="#service6" className="nav-link block">
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
            className="nav-link text-[#08548c] font-semibold transition-colors duration-300"
          >
            {t("Contact")}
          </a>
        </div>
      </nav>
    </>
  );
};

export default EgxHeader;
