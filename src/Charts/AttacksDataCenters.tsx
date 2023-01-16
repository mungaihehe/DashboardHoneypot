import { AttacksDataCentersData } from "../data/AttacksDataCenters";
import { Column } from "../Utils/Column";
import { Row } from "../Utils/Row";

export const AttacksDataCenters = () => {
  return (
    <Column
      style={{
        padding: "12px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        display: "inline-flex",
        margin: "4px",
      }}
    >
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Source IPs</p>
      {AttacksDataCentersData.map((data) => (
        <Row style={{ justifyContent: "space-between" }}>
          <p>{data.center}</p>
          <p>{data.number}</p>
        </Row>
      ))}
    </Column>
  );
};
