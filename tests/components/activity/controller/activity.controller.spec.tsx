import { render, screen } from "@testing-library/react";
import { ActivityType } from "@/app/utils/enums/activity-type";
import { ActivityController } from "@/components/activity/controller/activity.controller";
import { ActivityProps } from "@/components/activity/types";

const props: ActivityProps = {
  type: ActivityType.LISTENING,
  label: "Ouvindo",
  title: "Time",
  description: "Pink Floyd",
  albumName: "The Dark Side of the Moon",
  userName: "Davi",
  imageUrl: "https://example.com/album.jpg",
  userAvatarSrc: "https://example.com/avatar.jpg",
};

describe("ActivityController | (Unit)", () => {
  it("should render the activity label", () => {
    render(<ActivityController {...props} />);
    expect(screen.getByText("Ouvindo")).toBeInTheDocument();
  });

  it("should render the activity title", () => {
    render(<ActivityController {...props} />);
    expect(screen.getByText("Time")).toBeInTheDocument();
  });

  it("should render a coding activity", () => {
    render(
      <ActivityController
        {...props}
        type={ActivityType.CODING}
        label="Codando"
        title="vault-blog"
        description="activity.view.tsx"
      />
    );
    expect(screen.getByText("Codando")).toBeInTheDocument();
  });
});
