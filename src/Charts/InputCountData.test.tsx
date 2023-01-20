import { expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { InputCount } from "./InputCount";

export const InputCountData = [{ command: "uname -a	", count: 1295 }];

it("should display data correctly in the InputCount component", () => {
  render(<InputCount data={InputCountData} />);
  const a = screen.getByText("uname -a");
  const b = screen.getByText("1295");
  expect(a).toBeDefined();
  expect(b).toBeDefined();
});
