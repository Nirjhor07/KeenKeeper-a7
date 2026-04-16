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
    <div className="container mx-auto p-7 flex justify-center items-center">
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
  );
};

export default Stats;
