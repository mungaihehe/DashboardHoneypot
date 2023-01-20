import { SourceIPs } from "../Data/SourceIPs";
import { Card } from "../Utils/Card";
import { Column } from "../Utils/Column";
import { Row } from "../Utils/Row";

export const SourceIPNumbers = () => {
  return (
    <Card>
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Source IPs</p>
      {SourceIPs.map((data) => (
        <Row style={{ justifyContent: "space-between" }}>
          <p>{data.ip}</p>
          <p>{data.number}</p>
        </Row>
      ))}
    </Card>
  );
};
