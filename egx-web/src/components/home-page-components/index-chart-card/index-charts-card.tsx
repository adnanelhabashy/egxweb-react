import CardBase from "../card-base";
import ChartComponent from "./chart-component";
import "./index-charts.css";

const IndexCharts: React.FC = () => {
  return (
    <CardBase colSpan="col-span-12 sm:col-span-6 md:col-span-6">
      <div
        className="
        relative
        w-full
        bg-white
        rounded-xl
        shadow-lg
        border-t-4
        border-[#c0a46c]
        overflow-hidden
        transition
        duration-300
        hover:shadow-2xl
        hover:scale-[1.00]
      "
      >
        {/* Tabs & Dropdowns Row */}
        <div className="px-4 py-2 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs: horizontally scrollable on small screens */}
          <div
            className="
            flex
            items-center
            space-x-1
            rtl:space-x-reverse
            overflow-x-auto
            whitespace-nowrap
            pb-2 sm:pb-0
            scrollbar-hide
            hover:scrollbar-show
            
          "
          >
            <button className="shrink-0 px-3 py-1 text-sm font-medium bg-[#08548c] text-white rounded-full">
              EGX30
            </button>
            <button className="shrink-0 px-3 py-1 text-sm font-medium text-[#08548c] hover:bg-[#c0a46c]/20 rounded-full transition">
              SHARIAH
            </button>
            <button className="shrink-0 px-3 py-1 text-sm font-medium text-[#08548c] hover:bg-[#c0a46c]/20 rounded-full transition">
              EGX100
            </button>
            <button className="shrink-0 px-3 py-1 text-sm font-medium text-[#08548c] hover:bg-[#c0a46c]/20 rounded-full transition">
              EGX70 EWI
            </button>
            {/* Additional tabs */}
            <button className="shrink-0 px-3 py-1 text-sm font-medium text-[#08548c] hover:bg-[#c0a46c]/20 rounded-full transition">
              EGX30 Capped
            </button>
            <button className="shrink-0 px-3 py-1 text-sm font-medium text-[#08548c] hover:bg-[#c0a46c]/20 rounded-full transition">
              EGX30 TR
            </button>
          </div>

          {/* Two Dropdowns */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse mt-2 sm:mt-0">
            <select
              className="
              px-3 py-1
              rounded-full
              border border-gray-300
              text-sm
              text-[#08548c]
              focus:outline-none
              focus:ring-2
              focus:ring-[#c0a46c]
              transition
            "
            >
              <option>Today</option>
              <option>1 Week</option>
              <option>1 Month</option>
              <option>1 Year</option>
            </select>
            <select
              className="
              px-3 py-1
              rounded-full
              border border-gray-300
              text-sm
              text-[#08548c]
              focus:outline-none
              focus:ring-2
              focus:ring-[#c0a46c]
              transition
            "
            >
              <option>Index Details</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        {/* Chart Placeholder (Larger) */}
        <div className="p-4">
          <div
            className="
            bg-[#f8f8f8]
            h-56
            w-full
            rounded-md
            flex
            items-center
            justify-center
            text-gray-400
            text-sm
          "
          >
            {/* Replace this with your Nivo chart later */}
            <ChartComponent />
          </div>
        </div>

        {/* Stats Row */}
        <div className="px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-[#05365a]">
          {/* Left group: date & index value */}
          <div className="mb-2 sm:mb-0 flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span className="font-semibold">Date:</span>
              <span>20/03/2025</span>
            </div>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span className="font-semibold">Index Value:</span>
              <span>31,674.5</span>
            </div>
          </div>

          {/* Right group: change & YTD */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span className="font-semibold">Change:</span>
              <span className="text-green-600">+1.04%</span>
            </div>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span className="font-semibold">YTD:</span>
              <span className="text-green-600">+6.5%</span>
            </div>
          </div>
        </div>

        {/* Footer Row */}
        <div className="px-4 pb-4 flex items-center justify-between">
          <div className="text-sm text-green-700 font-semibold">
            Market Open
          </div>
          <div className="text-sm text-[#05365a]">
            <span className="font-semibold">Time:</span> 12:38 PM
          </div>
        </div>
      </div>
    </CardBase>
  );
};
export default IndexCharts;
