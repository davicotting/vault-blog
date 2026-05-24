import { {{ComponentName}} } from "@/components/{{component-name}}";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// vi.mock("next/navigation", () => ({
//   useRouter: () => ({ push: vi.fn() }),
// }));

describe("{{ComponentName}} | (Unit)", () => {
  it("should render {{component-name}}", () => {
    render(<{{ComponentName}} />);
    expect(screen.getByRole("{{role}}")).toBeInTheDocument();
  });
});
