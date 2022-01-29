import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render hello worls", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Addert
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render good to see you, if the button wasn't clicked", () => {
    render(<Greeting />);
    const paragraph = screen.getByText(/good to see you/i);
    expect(paragraph).toBeInTheDocument();
  });

  test("render changed if the button was clicked", () => {
    render(<Greeting />);
    userEvent.click(screen.getByRole("button"));
    const paragraph = screen.getByText(/Changed/i);
    const prevParagraph = screen.queryByText(/good to see you/i);
    expect(paragraph).toBeInTheDocument();
    expect(prevParagraph).toBeNull();
  });
});
