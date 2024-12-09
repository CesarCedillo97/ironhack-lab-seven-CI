// HomeScreen.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

describe("HomeScreen", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    expect(getByText("Welcome to the Home Screen!")).toBeTruthy();
  });
});
