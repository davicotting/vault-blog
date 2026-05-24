import { ActivityType } from "@/app/utils/enums/activity-type";

export interface ActivityProps {
  type: ActivityType;
  label: string;
  title: string;
  description: string;
  albumName?: string;
  userName: string;
  imageUrl: string;
  userAvatarSrc: string;
}

export interface ActivityViewProps extends ActivityProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
