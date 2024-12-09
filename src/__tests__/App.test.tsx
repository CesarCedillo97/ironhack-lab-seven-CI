import React from "react";
import { render } from "@testing-library/react-native";
import App from "../../App";

describe("App Navigation", () => {
  it("renders the login screen initially", () => {
    const { getByText } = render(<App />);
    expect(getByText("Welcome to the Home Screen!")).toBeTruthy();
  });
});
