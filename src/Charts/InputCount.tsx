import { InputCountData } from "../data/InputCountData";
import { Column } from "../Utils/Column";
import { Row } from "../Utils/Row";

export const InputCount = () => {
  return (
    <Column
      style={{
        padding: "12px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        display: "inline-flex",
        margin: "4px",
      }}
    >
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Input Data</p>
      {InputCountData.map((data) => (
        <Row style={{ justifyContent: "space-between" }}>
          <p>{data.command}</p>
          <p>{data.count}</p>
        </Row>
      ))}
    </Column>
  );
};
