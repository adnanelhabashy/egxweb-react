import React from "react";

const MarketOverview: React.FC = () => {
  // Dummy data
  const overviewData = [
    { label: "EGX30", value: "10,500", change: "+1.2%" },
    { label: "EGX70", value: "2,000", change: "-0.5%" },
    { label: "EGX100", value: "12,300", change: "+0.7%" },
  ];

  return (
    <section className="p-4 bg-white shadow my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {overviewData.map((item, idx) => (
        <div
          key={idx}
          className="p-4 border border-gray-200 rounded flex flex-col items-center"
        >
          <span className="text-gray-500">{item.label}</span>
          <span className="text-xl font-bold">{item.value}</span>
          <span
            className={`text-sm ${
              item.change.startsWith("+") ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.change}
          </span>
        </div>
      ))}
    </section>
  );
};

export default MarketOverview;
