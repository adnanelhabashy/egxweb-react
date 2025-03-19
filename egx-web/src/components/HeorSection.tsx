import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-200 p-6 flex flex-col md:flex-row items-center gap-6">
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Prime Minister meets with Exchange Chairman
        </h2>
        <p className="text-gray-700 mb-4">
          Tracking the latest development in the stock market and financial
          instruments.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src="https://via.placeholder.com/400x250"
          alt="Meeting"
          className="w-full h-auto rounded shadow"
        />
      </div>
    </section>
  );
};

export default HeroSection;
