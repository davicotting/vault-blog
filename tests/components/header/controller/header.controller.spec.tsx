import { Header } from "@/components/header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as nextRouter from "next/navigation";

vi.mock("next/navigation");

describe("Header | (Unit)", () => {
  it("should render header", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
  it("should have sign in and sign up buttons", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Create Account" }),
    ).toBeDefined();
  });
  it("should redirect to sign in page when login button is clicked", async () => {
    render(<Header />);

    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();

    await userEvent.click(loginButton);

    expect(vi.mocked(nextRouter.redirect)).toHaveBeenCalledWith("/sign-in");
  });
});
