import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PostsLayoutController } from "@/components/posts-layout/controller/posts-layout.controller";

vi.mock("@/components/ui/carousel", () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselNext: () => null,
  CarouselPrevious: () => null,
}));

vi.mock("@/components/activity-header", () => ({
  ActivityHeader: () => <div data-testid="activity-header" />,
}));

vi.mock("@/components/post-tabs", () => ({
  PostTabs: ({ activeTab, onTabChange }: { activeTab: string; onTabChange: (v: string) => void }) => (
    <button data-testid="tab-trigger" data-active-tab={activeTab} onClick={() => onTabChange("dev")}>
      {activeTab}
    </button>
  ),
}));

vi.mock("@/components/post-filter-dropdown", () => ({
  PostFilterDropdown: ({ sortOrder, onSortChange }: { sortOrder: string; onSortChange: (v: string) => void }) => (
    <button data-testid="sort-trigger" data-sort={sortOrder} onClick={() => onSortChange("antigos")}>
      {sortOrder}
    </button>
  ),
}));

describe("PostsLayoutController | (Unit)", () => {
  it("should render the posts heading", () => {
    render(<PostsLayoutController />);
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });

  it("should render activity header", () => {
    render(<PostsLayoutController />);
    expect(screen.getByTestId("activity-header")).toBeInTheDocument();
  });

  it("should update search query when user types in the input", async () => {
    render(<PostsLayoutController />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "zustand");
    expect(input).toHaveValue("zustand");
  });

  it("should update active tab when handleTabChange is called", async () => {
    render(<PostsLayoutController />);
    const tabTrigger = screen.getByTestId("tab-trigger");
    expect(tabTrigger).toHaveAttribute("data-active-tab", "todos");
    await userEvent.click(tabTrigger);
    expect(tabTrigger).toHaveAttribute("data-active-tab", "dev");
  });

  it("should update sort order when handleSortChange is called", async () => {
    render(<PostsLayoutController />);
    const sortTrigger = screen.getByTestId("sort-trigger");
    expect(sortTrigger).toHaveAttribute("data-sort", "recentes");
    await userEvent.click(sortTrigger);
    expect(sortTrigger).toHaveAttribute("data-sort", "antigos");
  });
});
