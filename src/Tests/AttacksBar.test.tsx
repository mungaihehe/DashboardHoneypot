import { render, screen } from "@testing-library/react";
import { AttacksBar } from "../Charts/AttacksBar";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("Loads data correctly", async () => {
  render(
    <AttacksBar
      data={[
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
      ]}
    />
  );

  expect(screen.getByText("2299286")).not.toBe(undefined);
});
