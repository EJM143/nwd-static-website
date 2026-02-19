import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Contact from "./Contact";
import React from "react";
import "@testing-library/jest-dom";

// Mock Navbar and Footer (not needed for logic testing)
jest.mock("../components/Navbar", () => () => <div>Navbar</div>);
jest.mock("../components/Footer", () => () => <div>Footer</div>);

// Mock useNavigate
const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

// Mock fetch to prevent real network request
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
  );

  mockedNavigate.mockClear();
});

describe("Contact Page Integration Tests", () => {
  test("Happy Path: Form submits successfully when all fields are filled", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    await user.type(screen.getByLabelText(/name/i), "Beimnet");
    await user.type(screen.getByLabelText(/email/i), "test@test.com");
    await user.type(
      screen.getByLabelText(/message/i),
      "Hello this is a test message"
    );

    await user.click(screen.getByRole("button", { name: /submit/i }));

    // Ensure fetch was called
    expect(global.fetch).toHaveBeenCalled();

    // Ensure navigation happened
    expect(mockedNavigate).toHaveBeenCalledWith("/contact-thank-you");
  });
});