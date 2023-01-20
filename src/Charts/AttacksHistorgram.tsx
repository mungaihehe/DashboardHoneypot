import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { AttackData } from "../Data/AttackData";
import { Card } from "../Utils/Card";
import { Column } from "../Utils/Column";

export const AttacksHistogram = () => {
  return (
    <Card>
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Attacks Line Chart</p>

      <LineChart data={AttackData} width={500} height={250}>
        <XAxis dataKey={"date"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={"attacks"} stroke={"#f97316"} />
        <Line type="monotone" dataKey={"uniqueSourceIPs"} stroke={"#f97316"} />
        <Line type="monotone" dataKey={"uniqueHASSHs"} stroke={"#f97316"} />
      </LineChart>
    </Card>
  );
};
