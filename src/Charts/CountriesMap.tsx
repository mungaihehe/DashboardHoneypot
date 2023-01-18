import { Column } from "../Utils/Column";
import Map from "../data/Map.png";

export const CountriesMap = () => {
  return (
    <Column
      style={{
        padding: "12px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        display: "inline-flex",
        margin: "4px",
      }}
    >
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Attacks - Countries</p>

      <img src={Map} />
    </Column>
  );
};
