import { expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { AttacksDetails } from "./AttacksDetails";

const AttackData = [
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

it("should display data correctly in the AttacksDetail component", () => {
  render(<AttacksDetails data={AttackData} />);
  const a = screen.getByText("229986");
  const b = screen.getByText("Attacks");
  expect(a).toBeDefined();
  expect(b).toBeDefined();
});
