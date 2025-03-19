import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow p-4 mt-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-gray-600">
        &copy; 2025 Modern Exchange. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="text-red-600 hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
