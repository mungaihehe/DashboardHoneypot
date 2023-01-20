import { FC } from "react";
import { BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { Card } from "../Utils/Card";
import { Column } from "../Utils/Column";

const AttackBarData = [
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
export const AttacksBar: FC<{
  data?: { type: string; number: number }[];
}> = ({ data = AttackBarData }) => {
  return (
    <Card>
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Attacks Bar</p>
      <BarChart width={500} height={250} data={data}>
        <XAxis dataKey={"type"} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={"number"} fill={"#f97316"} />
      </BarChart>
    </Card>
  );
};
