import { AttacksBar } from "./Charts/AttacksBar";
import { AttacksByCountry } from "./Charts/AttacksByCountry";
import { AttacksDataCenters } from "./Charts/AttacksDataCenters";
import { AttacksDetails } from "./Charts/AttacksDetails";
import { AttacksHistogram } from "./Charts/AttacksHistorgram";
import { CountriesMap } from "./Charts/CountriesMap";
import { InputCount } from "./Charts/InputCount";
import { SourceIPNumbers } from "./Charts/SourceIPNumbers";
import { TagCloudUsername } from "./Charts/TagCloudUsername";
import { Column } from "./Utils/Column";
import { Row } from "./Utils/Row";

function App() {
  return (
    <Column
      style={{
        padding: "12px",
      }}
    >
      <p style={{ fontWeight: "800", opacity: 0.5 }}>HoneyPot Dashboard</p>
      <Row
        style={{
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <AttacksBar />
        <AttacksDetails />
        <AttacksHistogram />

        <CountriesMap />

        <AttacksByCountry />

        <TagCloudUsername />
        <AttacksDataCenters />
        <InputCount />
        <SourceIPNumbers />
      </Row>
    </Column>
  );
}

export default App;
