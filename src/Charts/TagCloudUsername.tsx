import { TagCloud } from "react-tagcloud";
import { TagCloudData } from "../Data/TagCloudData";
import { Card } from "../Utils/Card";
import { Column } from "../Utils/Column";

export const TagCloudUsername = () => {
  return (
    <Card
      style={{
        width: "500px",
        height: "300px",
      }}
    >
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Username Tagcloud Bar</p>

      <TagCloud minSize={16} maxSize={32} tags={TagCloudData} />
    </Card>
  );
};
