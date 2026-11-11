import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("各セクションが表示される", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Transition" })
    ).toBeInTheDocument();
    for (const name of ["Works", "Hello. I'm …", "Skill Set", "Release Notes"]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
    }
  });

  test("外部リンクは新しいタブで安全に開く", () => {
    render(<App />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
