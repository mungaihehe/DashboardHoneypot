import { InputCountData } from "../Data/InputCountData";
import { Card } from "../Utils/Card";
import { Column } from "../Utils/Column";
import { Row } from "../Utils/Row";

export const InputCount = () => {
  return (
    <Card>
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Input Data</p>
      {InputCountData.map((data) => (
        <Row style={{ justifyContent: "space-between" }}>
          <p>{data.command}</p>
          <p>{data.count}</p>
        </Row>
      ))}
    </Card>
  );
};
