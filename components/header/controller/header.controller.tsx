"use client";

import { useRouter } from "next/navigation";
import { HeaderView } from "../view/header.view";
import { RoutesUrls } from "@/app/utils/enums/routes-url";

export function HeaderController() {
  const { push } = useRouter();

  function handleRedirectToSignIn() {
    push(RoutesUrls.SIGN_IN);
  }

  function handleRedirectToSignUp() {
    push(RoutesUrls.SIGN_UP);
  }

  function handleRedirectToHome() {
    push(RoutesUrls.HOME);
  }

  return (
    <HeaderView
      redirecToHome={handleRedirectToHome}
      handleRedirectToSignIn={handleRedirectToSignIn}
      handleRedirectToSignUp={handleRedirectToSignUp}
    />
  );
}
