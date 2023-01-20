import { PieChart, Pie, Legend } from "recharts";
import { AttacksByCountryData } from "../Data/AttacksByCountry";
import { Card } from "../Utils/Card";
import { Column } from "../Utils/Column";

export const AttacksByCountry = () => {
  return (
    <Card>
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
    </Card>
  );
};
