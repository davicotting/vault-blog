import { Vault } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderProps } from "../types";

export function HeaderView({
  handleRedirectToSignIn,
  handleRedirectToSignUp,
  redirecToHome
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <Vault size={32} className="hover:opacity-75" onClick={redirecToHome}/>

      <nav className="flex items-center gap-4">
        <Button onClick={handleRedirectToSignIn}>Entrar</Button>
        <Button onClick={handleRedirectToSignUp}>Criar conta</Button>
      </nav>
    </header>
  );
}
