import { getByText, render, screen } from "@testing-library/react";

import BubblePage from "./BubblePage";
import React from "react";

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  //Task List
  //1. Setup test for basic rendering of component
  //2. Setup test for initial rendering of bubbles on loading
  render(<BubblePage />);
});
