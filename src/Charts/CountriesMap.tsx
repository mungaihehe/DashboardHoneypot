import { Column } from "../Utils/Column";
import Map from "../data/Map.png";
import { Card } from "../Utils/Card";

export const CountriesMap = () => {
  return (
    <Card>
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Attacks - Countries</p>

      <img src={Map} />
    </Card>
  );
};
