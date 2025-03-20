// import React, { useEffect, useState } from "react";
// import { container } from "../../IocContainer/IocContainer";
// import { TYPES } from "../../IocContainer/types";
// import { IHttpService } from "../../HttpServices/IHttpService";
import React, { ReactNode } from "react";

import "./card-base.css";
interface CardBaseProps {
  children: ReactNode;
  colSpan?: string; // e.g., "col-span-1", "md:col-span-2"
}

const CardBase: React.FC<CardBaseProps> = ({
  children,
  colSpan = "col-span-1",
}) => {
  // const [data, setData] = useState<any>(null);

  // useEffect(() => {
  //   const httpService = container.get<IHttpService>(TYPES.IHttpService);
  //   httpService
  //     .hgetAll("EGXWebMarketIndicators")
  //     .then((response) => {
  //       console.log("Webdis response:", response);
  //       setData(response);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err);
  //     });
  // }, []);
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-1 transition transform duration-300 hover:scale-100 hover:shadow-2xl animate-fadeIn ${colSpan}`}
    >
      {children}
    </div>
  );
};

export default CardBase;
