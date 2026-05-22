import { Vault } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderProps } from "../types";

export function HeaderView({
  handleRedirectToSignIn,
  handleRedirectToSignUp,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <Vault size={32} />

      <nav className="flex items-center gap-4">
        <Button onClick={handleRedirectToSignIn}>Login</Button>
        <Button onClick={handleRedirectToSignUp}>Create Account</Button>
      </nav>
    </header>
  );
}
