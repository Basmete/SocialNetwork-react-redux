import * as React from "react";
import ProfileStatus from "./ProfileStatus";
import { render } from "@testing-library/react";

describe(`ProfileStatus component`, () => {
  test("status from props should be in the state", () => {
    const { getByText } = render(<ProfileStatus status="kek" />);
    expect(getByText("kek")).toBeInTheDocument();
  });
});
