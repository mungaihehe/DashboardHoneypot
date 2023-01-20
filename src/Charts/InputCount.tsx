import { FC } from "react";
import { InputCountData } from "../Data/InputCountData";
import { Card } from "../Utils/Card";
import { Row } from "../Utils/Row";

export const InputCount: FC<{ data: { command: string; count: number }[] }> = ({
  data = InputCountData,
}) => {
  return (
    <Card>
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Input Data</p>
      {data.map((data) => (
        <Row style={{ justifyContent: "space-between" }}>
          <p>{data.command}</p>
          <p>{data.count}</p>
        </Row>
      ))}
    </Card>
  );
};
