import { render, screen } from "@testing-library/react";
import { PostSearchInputController } from "@/components/post-search-input/controller/post-search-input.controller";

const onUserTyping = vi.fn();

describe("PostSearchInputController | (Unit)", () => {
  it("should render the search input", () => {
    render(<PostSearchInputController value="" onUserTyping={onUserTyping} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render with the provided value", () => {
    render(<PostSearchInputController value="react" onUserTyping={onUserTyping} />);
    expect(screen.getByRole("textbox")).toHaveValue("react");
  });
});
