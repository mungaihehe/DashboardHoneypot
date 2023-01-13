import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { AttackData } from "../AttackData";
import { Column } from "../Utils/Column";

export const AttacksHistogram = () => {
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

      <LineChart data={AttackData} width={500} height={250}>
        <XAxis dataKey={"date"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={"attacks"} stroke={"#8884d8"} />
        <Line type="monotone" dataKey={"uniqueSourceIPs"} stroke={"#82ca9d"} />
        <Line type="monotone" dataKey={"uniqueHASSHs"} stroke={"#8884d8"} />
      </LineChart>
    </Column>
  );
};
