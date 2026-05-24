import { ActivityHeaderProps } from "../types";
import { ActivityHeaderView } from "../view/activity-header.view";

export function ActivityHeaderController({
  avatarSrc,
  status,
  activities,
}: ActivityHeaderProps) {
  return (
    <ActivityHeaderView
      avatarSrc={avatarSrc}
      status={status}
      activities={activities}
    />
  );
}
