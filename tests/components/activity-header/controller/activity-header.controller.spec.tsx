import { render, screen } from "@testing-library/react";
import { ActivityType } from "@/app/utils/enums/activity-type";
import { ActivityHeaderController } from "@/components/activity-header/controller/activity-header.controller";
import { ActivityHeaderProps } from "@/components/activity-header/types";

const props: ActivityHeaderProps = {
  avatarSrc: "https://example.com/avatar.jpg",
  status: "online",
  activities: [
    {
      type: ActivityType.LISTENING,
      label: "Ouvindo",
      title: "Time",
      description: "Pink Floyd",
      albumName: "The Dark Side of the Moon",
      userName: "Davi",
      imageUrl: "https://example.com/album.jpg",
      userAvatarSrc: "https://example.com/avatar.jpg",
    },
  ],
};

describe("ActivityHeaderController | (Unit)", () => {
  it("should render the activity header title", () => {
    render(<ActivityHeaderController {...props} />);
    expect(screen.getByText("O que estamos tramando?")).toBeInTheDocument();
  });

  it("should render the activity label", () => {
    render(<ActivityHeaderController {...props} />);
    expect(screen.getByText("Ouvindo")).toBeInTheDocument();
  });
});
