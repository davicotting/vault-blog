import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Activity } from "@/components/activity";
import { ActivityHeaderProps, AvatarStatus } from "../types";
import { ImagesUrls } from "@/app/utils/enums/users-url";

const statusColor: Record<AvatarStatus, string> = {
  online: "bg-green-500",
  ausente: "bg-yellow-500",
  offline: "bg-gray-500",
};

export function ActivityHeaderView({
  avatarSrc,
  status,
  activities,
}: ActivityHeaderProps) {
  return (
    <div className="flex items-center gap-6 shrink-0 bg-muted/0 p-4 rounded-lg w-max mt-4">
      <div className="flex flex-col gap-3 flex-1">
        <h1 className="text-xl font-semibold tracking-tight">
          O que estamos tramando?
        </h1>
        <div className="flex gap-2">
         
          {activities.map((activity) => (
            <Activity
              key={activity.label}
              type={activity.type}
              label={activity.label}
              title={activity.title}
              description={activity.description}
              albumName={activity.albumName}
              userName={activity.userName}
              imageUrl={activity.imageUrl}
              userAvatarSrc={activity.userAvatarSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
