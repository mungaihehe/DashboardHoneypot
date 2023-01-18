import { Column } from "../Utils/Column";

const data = [
  {
    type: "Attacks",
    number: 229986,
  },
  {
    type: "Unique Source IPs",
    number: 1501,
  },
  {
    type: "Unique HASSHs",
    number: 47,
  },
];

export const AttacksDetails = () => {
  return (
    <Column
      style={{
        padding: "12px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        display: "inline-flex",
        margin: "4px",
      }}
    >
      <p style={{ opacity: 0.5 }}>Cowrie Attacks</p>
      {data.map((d) => (
        <Column>
          <p
            style={{
              fontWeight: "800",
              fontSize: "24px",
              color: "#f97316",
            }}
          >
            {d.number}
          </p>
          <p>{d.type}</p>
        </Column>
      ))}
    </Column>
  );
};
