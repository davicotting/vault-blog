import { render, screen } from "@testing-library/react";
import { HeroController } from "@/components/hero/controller/hero.controller";

vi.mock("@/components/hero-search-form", () => ({
  HeroSearchForm: () => <div data-testid="hero-search-form" />,
}));

describe("HeroController | (Unit)", () => {
  it("should render the hero heading", () => {
    render(<HeroController />);
    expect(screen.getByText(/Código, café/)).toBeInTheDocument();
  });

  it("should render the hero description", () => {
    render(<HeroController />);
    expect(screen.getByText(/desenvolvimento, carreira/)).toBeInTheDocument();
  });

  it("should render the search form", () => {
    render(<HeroController />);
    expect(screen.getByTestId("hero-search-form")).toBeInTheDocument();
  });
});
