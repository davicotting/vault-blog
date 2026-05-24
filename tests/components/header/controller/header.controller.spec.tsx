import { Header } from "@/components/header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe("Header | (Unit)", () => {
  it("should render header", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("should have sign in and sign up buttons", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Criar conta" })).toBeInTheDocument();
  });

  it("should redirect to sign in page when login button is clicked", async () => {
    render(<Header />);
    await userEvent.click(screen.getByRole("button", { name: "Entrar" }));
    expect(mockPush).toHaveBeenCalledWith("/sign-in");
  });

  it("should redirect to sign up page when sign up button is clicked", async () => {
    render(<Header />);
    await userEvent.click(screen.getByRole("button", { name: "Criar conta" }));
    expect(mockPush).toHaveBeenCalledWith("/sign-up");
  });

  it("should redirect to home when logo is clicked", async () => {
    render(<Header />);
    await userEvent.click(screen.getByTestId("logo"));
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
