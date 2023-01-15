import { SourceIPs } from "../data/SourceIPs";
import { Column } from "../Utils/Column";
import { Row } from "../Utils/Row";

export const SourceIPNumbers = () => {
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
      {SourceIPs.map((data) => (
        <Row style={{ justifyContent: "space-between" }}>
          <p>{data.ip}</p>
          <p>{data.number}</p>
        </Row>
      ))}
    </Column>
  );
};
