import { PieChart, Pie, Legend } from "recharts";
import { AttacksByCountryData } from "../data/AttacksByCountry";
import { Column } from "../Utils/Column";

export const AttacksByCountry = () => {
  return (
    <Column
      style={{
        padding: "12px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        display: "inline-flex",
        margin: "4px",
      }}
    >
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Attacks By Country</p>

      <PieChart width={600} height={300}>
        <Pie
          data={AttacksByCountryData}
          dataKey={"Count"}
          nameKey={"country_name"}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#f97316"
          label={(data) => {
            return data.country_name;
          }}
        />
      </PieChart>
    </Column>
  );
};
