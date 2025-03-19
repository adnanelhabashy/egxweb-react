import React from "react";

interface TableRow {
  name: string;
  price: number;
  change: number;
}

const DataTable: React.FC = () => {
  // Dummy data
  const data: TableRow[] = [
    { name: "Company A", price: 120.5, change: +1.2 },
    { name: "Company B", price: 98.0, change: -0.8 },
    { name: "Company C", price: 45.3, change: +0.5 },
  ];

  return (
    <section className="p-4 bg-white shadow my-4">
      <h3 className="text-xl font-bold mb-2">Market Data</h3>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 border-b">Company</th>
            <th className="text-left p-2 border-b">Price</th>
            <th className="text-left p-2 border-b">Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-2 border-b">{row.name}</td>
              <td className="p-2 border-b">{row.price}</td>
              <td
                className={`p-2 border-b ${
                  row.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {row.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DataTable;
