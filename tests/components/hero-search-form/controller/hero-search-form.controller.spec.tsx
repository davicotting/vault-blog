import { render, screen } from "@testing-library/react";
import { HeroSearchFormController } from "@/components/hero-search-form/controller/hero-search-form.controller";

describe("HeroSearchFormController | (Unit)", () => {
  it("should render the search form", () => {
    render(<HeroSearchFormController />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render a submit button", () => {
    render(<HeroSearchFormController />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
