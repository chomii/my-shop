import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("Home Page", () => {
  test("renders Home Page heading", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", { name: /Home Page/i });
    expect(heading).toBeInTheDocument();
  });
});
