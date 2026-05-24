import { render, screen } from "@testing-library/react";
import { FooterController } from "@/components/footer/controller/footer.controller";

describe("FooterController | (Unit)", () => {
  it("should render footer", () => {
    render(<FooterController />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should render copyright text", () => {
    render(<FooterController />);
    expect(screen.getByText(/Vault Blog/)).toBeInTheDocument();
  });
});
