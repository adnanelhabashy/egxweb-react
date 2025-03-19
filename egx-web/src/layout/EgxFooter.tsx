import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./EgxHeader.css"; // Reuse the .glow-wave & .nav-link hover styles

const EgxFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative py-12 mt-8">
      {/* BACKGROUND PATTERN & WAVE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2 transform scale-75 origin-center"
          style={{
            backgroundImage: "url('assets/images/logo.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute inset-0 bg-[#05365a] opacity-90" />
        <div className="glow-wave" />
      </div>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-[#c0a46c] leading-relaxed">
        {/* Thick gold top border with shadow */}
        <div className="w-full border-t-8 border-[#c0a46c] shadow-lg mb-8"></div>

        {/* 
          TOP ROW: Brand & Social Icons 
          - We use order classes so brand is on the left in LTR, 
            and on the right in RTL. 
        */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0 w-full">
          {/* Social Icons (Order 1 in LTR, Order 2 in RTL) */}
          <div className="order-2 md:order-2 rtl:md:order-1 flex space-x-6 rtl:space-x-reverse">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c0a46c] hover:text-white transition-colors duration-300"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c0a46c] hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c0a46c] hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>

          {/* Brand (Order 2 in LTR, Order 1 in RTL) */}
          <div className="order-1 md:order-1 rtl:md:order-2 text-center md:text-left rtl:md:text-right">
            <h2 className="text-3xl font-bold drop-shadow-md leading-tight">
              {t("The Egyptian Exchange")}
            </h2>
            <p className="text-sm text-[#c0a46c] opacity-90 mt-2">
              {t("Your Trusted Gateway to Investment Opportunities")}
            </p>
          </div>
        </div>

        {/* MIDDLE ROW: Multi-column links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: The Egyptian Exchange */}
          <div className="md:pr-4">
            <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">
              {t("The Egyptian Exchange")}
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="nav-link block">
                  {t("About EGX")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("SMEs Market")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Complaints")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Careers")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Contact Us")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: News */}
          <div className="md:border-l md:border-[#c0a46c] md:pl-4 md:pr-4 rtl:md:border-l-0 rtl:md:border-r rtl:md:pr-4 rtl:md:pl-0">
            <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">
              {t("News")}
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="nav-link block">
                  {t("Disclosure News")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Member News")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Listing News")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Media")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="md:border-l md:border-[#c0a46c] md:pl-4 rtl:md:border-l-0 rtl:md:border-r rtl:md:pl-0 rtl:md:pr-4">
            <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">
              {t("Navigation")}
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="nav-link block">
                  {t("Home")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Glossary")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Related Links")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Sitemap")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link block">
                  {t("Disclaimer")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: Disclaimers & Copyright */}
        <div className="border-t border-[#c0a46c] pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} {t("All Rights Reserved")}.{" "}
            {t(
              "This is a sample footer text. All information is subject to change."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EgxFooter;
