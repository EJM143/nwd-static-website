import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import Main from "../pages/Main";
import About from "../pages/About";
import DevelopersPage from "../pages/DevelopersPage";
import PortfolioPage from "../pages/PortfolioPage";

function resizeWindow(width, height) {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
}

test("Home page renders on mobile", () => {
  resizeWindow(375, 800);
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  expect(screen.getAllByText("Next Wave Dev").length).toBeGreaterThan(0);
});

test("About page renders on mobile", () => {
  resizeWindow(375, 800);
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
});

test("Developers page renders on mobile", () => {
  resizeWindow(375, 800);
  render(
    <MemoryRouter>
      <DevelopersPage />
    </MemoryRouter>
  );
});

test("Portfolio page renders on mobile", () => {
  resizeWindow(375, 800);
  render(
    <MemoryRouter>
      <PortfolioPage />
    </MemoryRouter>
  );
});