import { TagCloud } from "react-tagcloud";
import { TagCloudData } from "../data/TagCloudData";
import { Column } from "../Utils/Column";

export const TagCloudUsername = () => {
  return (
    <Column
      style={{
        width: "500px",
        height: "300px",
        padding: "12px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        display: "inline-flex",
        margin: "4px",
      }}
    >
      <p style={{ opacity: 0.5, paddingLeft: "12px" }}>Username Tagcloud Bar</p>

      <TagCloud minSize={16} maxSize={32} tags={TagCloudData} />
    </Column>
  );
};
