import { ImagesUrls } from "@/app/utils/enums/users-url";
import { ActivityType } from "@/app/utils/enums/activity-type";
import { ActivityHeaderProps } from "@/components/activity-header/types";

const { PLOTTING_VAULT_BOY, PINK_FLOYD_ALBUM_COVER, TYPESCRIPT, DAVI_COTTING } = ImagesUrls;

export const ACTIVITY_HEADER: ActivityHeaderProps = {
  avatarSrc: PLOTTING_VAULT_BOY,
  status: "online",
  activities: [
    {
      type: ActivityType.LISTENING,
      label: "Ouvindo",
      title: "Time",
      description: "Pink Floyd",
      albumName: "The Dark Side of the Moon",
      userName: "Davi",
      imageUrl: PINK_FLOYD_ALBUM_COVER,
      userAvatarSrc: PLOTTING_VAULT_BOY,
    },
    {
      type: ActivityType.CODING,
      label: "Codando",
      title: "vault-blog",
      description: "activity.view.tsx",
      userName: "Davi",
      imageUrl: TYPESCRIPT,
      userAvatarSrc: DAVI_COTTING,
    },
  ],
};
