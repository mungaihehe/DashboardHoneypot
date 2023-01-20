import { AttacksDataCentersData } from "../Data/AttacksDataCenters";
import { Card } from "../Utils/Card";
import { Row } from "../Utils/Row";

export const AttacksDataCenters = () => {
  return (
    <Card>
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Attacks Data Centers</p>
      {AttacksDataCentersData.map((data) => (
        <Row style={{ justifyContent: "space-between" }}>
          <p>{data.center}</p>
          <p>{data.number}</p>
        </Row>
      ))}
    </Card>
  );
};
