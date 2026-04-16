import { Pie, PieChart, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Stats = ({ fActivity }) => {
  const data = [
    {
      fill: "#0088FE",
      name: "call",
      value: fActivity.filter((item) => item.value === "call").length,
    },
    {
      fill: "#00C49F",
      name: "text",
      value: fActivity.filter((item) => item.value === "text").length,
    },
    {
      fill: "#FFBB28",
      name: "Video",
      value: fActivity.filter((item) => item.value === "video").length,
    },
    
  ];

  return (
  <div className="flex flex-col items-center justify-center gap-4 py-3.5">
    <h2 className="text-4xl font-bold text-left container">FriendShip Analysis</h2>
      <div className="container bg-base-200 mx-auto p-7 flex flex-col justify-center items-center gap-4">
      <p className="text-lg font-semibold container text-green-600">By Interaction Type</p>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
  );
};

export default Stats;
