import { render, screen } from "@testing-library/react";
import { PostFilterDropdownController } from "@/components/post-filter-dropdown/controller/post-filter-dropdown.controller";

const onSortChange = vi.fn();

describe("PostFilterDropdownController | (Unit)", () => {
  it("should render the filter trigger button", () => {
    render(<PostFilterDropdownController sortOrder="recentes" onSortChange={onSortChange} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render with antigos sort order without throwing", () => {
    render(<PostFilterDropdownController sortOrder="antigos" onSortChange={onSortChange} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
