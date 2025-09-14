"use client";

import { PieChart, Pie, Cell } from "recharts";

export default function TotalHoldings() {
  const data = [
    { name: "Stake", value: 0, color: "#EE50FA" },
    { name: "Equinox", value: 0, color: "#2460ED" },
  ];
  const total = data.reduce((acc, d) => acc + d.value, 0);

  return (
    <div className="col-span-5 rounded-2xl bg-[#1D1A46] p-6">
      <h2 className="mb-8 text-xl font-bold text-white">Total Holdings</h2>

      <div className="mb-6 flex flex-col items-center justify-center gap-11 md:flex-row">
        {/* Donut Chart */}
        <PieChart width={146} height={146}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={65}
            dataKey="value"
            stroke="transparent"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          {/* Center text */}
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            className="fill-[#A5AED5] text-[12px] font-sans"
          >
            Total
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            className="fill-white text-[20px] font-semibold font-sans"
          >
            ${total.toFixed(2)}
          </text>
        </PieChart>

        {/* Legend */}
        <div className="flex w-full flex-1 flex-col justify-between gap-4">
          {data.map((d, i) => (
            <div key={i} className="flex w-full items-center">
              <div
                className="mr-2 h-4 w-4 rounded-sm"
                style={{ backgroundColor: d.color }}
              />
              <div className="flex w-full items-center justify-between">
                <span className="text-sm text-gray-400">{d.name}</span>
                <span className="text-sm font-medium text-white">
                  {d.value}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
