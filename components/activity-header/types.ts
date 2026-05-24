import { ActivityProps } from "@/components/activity/types";

export type AvatarStatus = "online" | "offline" | "ausente";

export interface ActivityHeaderProps {
  avatarSrc: string;
  status: AvatarStatus;
  activities: ActivityProps[];
}
