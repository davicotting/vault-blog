import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ActivityType } from "@/app/utils/enums/activity-type";
import { ActivityViewProps } from "../types";

export function ActivityView({ type, label, title, description, albumName, userName, imageUrl, userAvatarSrc, isOpen, onOpenChange }: ActivityViewProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger
        render={
          <div className="flex gap-3 py-2 px-4 group transition-colors flex-col cursor-pointer" />
        }
      >
        <span className="text-xs text-muted-foreground font-mono text-start px-2">
          {label}
        </span>
        <div className="flex items-center gap-2 group-hover:bg-muted group-hover:rounded-lg p-2">
          <div className="relative shrink-0">
            <div
              className="h-13 w-13 rounded-md"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Avatar className="h-6.5 w-6.5 absolute -top-1.5 -left-1.5 ring-2 ring-background">
              <AvatarImage src={userAvatarSrc} alt="user" />
            </Avatar>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold leading-tight">{title}</span>
            <span className="text-xs text-muted-foreground leading-tight">
              {description}
            </span>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm p-0 overflow-hidden gap-0">
        <div
          className="relative w-full h-48"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20" />
          <div className="absolute bottom-0 left-0 p-4 flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-white leading-tight">{title}</span>
            <span className="text-xs text-white/70 leading-tight">{description}</span>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-3">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <Avatar className="h-14 w-14 shrink-0">
                <AvatarImage src={userAvatarSrc} alt="user" />
              </Avatar>
              <DialogTitle className="text-base font-semibold">
                @{userName}
              </DialogTitle>
            </div>
          </DialogHeader>
          {type === ActivityType.LISTENING && (
            <p className="text-sm text-foreground">
              {userName}
              {" está "}
              <span className="font-semibold">ouvindo</span>
              {" "}
              <span className="font-semibold">{title}</span>
              {" do album "}
              <span className="font-semibold">{albumName}</span>
            </p>
          )}
          {type === ActivityType.CODING && (
            <p className="text-sm text-foreground">
              {userName}
              {" está "}
              <span className="font-semibold">codando</span>
              {" no repositório "}
              <span className="font-semibold">{title}</span>
              {" no arquivo "}
              <span className="font-semibold">{description}</span>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
