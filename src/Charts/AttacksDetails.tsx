import { FC } from "react";
import { Card } from "../Utils/Card";
import { Column } from "../Utils/Column";

const AttackData = [
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

export const AttacksDetails: FC<{
  data?: { type: string; number: number }[];
}> = ({ data = AttackData }) => {
  return (
    <Card>
      <p style={{ opacity: 0.5 }}>Cowrie Attacks</p>
      {data.map((d) => (
        <Column>
          <p
            style={{
              fontWeight: "800",
              fontSize: "24px",
              color: "#f97316",
            }}
          >
            {d.number}
          </p>
          <p>{d.type}</p>
        </Column>
      ))}
    </Card>
  );
};
