import { redirect } from "next/navigation";
import { HeaderView } from "../view/header.view";
import { RoutesUrls } from "@/app/utils/enums/routes-url";

export function HeaderController() {
  function handleRedirectToSignIn() {
    redirect(RoutesUrls.SIGN_IN);
  }

  function handleRedirectToSignUp() {
    redirect(RoutesUrls.SIGN_UP);
  }
  
  return (
    <HeaderView
      handleRedirectToSignIn={handleRedirectToSignIn}
      handleRedirectToSignUp={handleRedirectToSignUp}
    />
  );
}
