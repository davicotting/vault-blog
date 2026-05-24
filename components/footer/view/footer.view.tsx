import { ImagesUrls } from "@/app/utils/enums/users-url";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { FooterProps } from "../types";

export function FooterView({}: FooterProps) {
  return (
    <footer className="flex items-center gap-4 justify-between text-muted-foreground text-xs">
      <span>© 2026 Vault Blog. All rights reserved.</span>
      <div className="flex items-center gap-4">
        <span>Developed by</span>
        <AvatarGroup>
          <Avatar>
            <AvatarImage src={ImagesUrls.VAULT_BOY} alt="@vaultboy24" />
          </Avatar>
          <Avatar>
            <AvatarImage src={ImagesUrls.DAVI_COTTING} alt="@davicotting" />
          </Avatar>
        </AvatarGroup>
      </div>
    </footer>
  );
}
