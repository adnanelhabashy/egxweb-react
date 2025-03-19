import React from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  onToggleDirection: () => void;
  isRTL: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleDirection }) => {
  const { t } = useTranslation();
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="h-10 w-10"
        />
        <span className="text-xl font-bold">My Modern Exchange</span>
      </div>

      {/* Navigation (example links) */}
      <nav className="hidden md:flex space-x-4">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>
        <a href="#" className="hover:text-blue-600">
          Markets
        </a>
        <a href="/about" className="hover:text-blue-600">
          About
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </nav>

      {/* RTL Toggle Button */}
      <button
        onClick={() => onToggleDirection()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {t("toggle_button")}
      </button>
    </header>
  );
};

export default Header;
