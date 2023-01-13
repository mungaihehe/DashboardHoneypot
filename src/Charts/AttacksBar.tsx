import { BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { Column } from "../Utils/Column";

const data = [
  {
    type: "Attacks",
    number: 229986,
  },
  {
    type: "Unique Source IPs",
    number: 1501,
  },
  {
    type: "Unique HASSHs",
    number: 47,
  },
];
export const AttacksBar = () => {
  return (
    <Column
      style={{
        padding: "12px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        display: "inline-flex",
        margin: "4px",
      }}
    >
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Attacks Bar</p>
      <BarChart width={500} height={250} data={data}>
        <XAxis dataKey={"type"} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={"number"} fill={"#8884d8"} />
      </BarChart>
    </Column>
  );
};
