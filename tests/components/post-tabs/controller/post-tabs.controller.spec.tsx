import { render, screen } from "@testing-library/react";
import { PostTabsController } from "@/components/post-tabs/controller/post-tabs.controller";

const topics = [
  { value: "todos", label: "Todos" },
  { value: "dev", label: "Dev" },
  { value: "vida", label: "Vida" },
];
const onTabChange = vi.fn();

describe("PostTabsController | (Unit)", () => {
  it("should render all topic tabs", () => {
    render(<PostTabsController topics={topics} activeTab="todos" onTabChange={onTabChange} />);
    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Dev")).toBeInTheDocument();
    expect(screen.getByText("Vida")).toBeInTheDocument();
  });

  it("should pass onTabChange as a callback to the view", () => {
    render(<PostTabsController topics={topics} activeTab="todos" onTabChange={onTabChange} />);
    expect(screen.getAllByRole("tab")).toHaveLength(3);
  });
});
