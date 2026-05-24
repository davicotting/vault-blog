"use client";
import { ImagesUrls } from "@/app/utils/enums/users-url";
import { HeroProps } from "../types";
import { HeroSearchForm } from "@/components/hero-search-form";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function HeroView({}: HeroProps) {
  return (
    <section className="flex-1 flex items-center justify-center flex-col">
      <Avatar className={"h-25 w-25"}>
        <AvatarImage src={ImagesUrls.VAULT_BOY_GIF} alt="@vaultboy24" />
      </Avatar>
      <h1 className="font-bold mt-6 mb-4 text-2xl lg:text-5xl tracking-tight">
        Código, café e{" "}
        <span className="italic underline hover:opacity-75 cursor-pointer">
          caos
        </span>
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        Um espaço sobre desenvolvimento, carreira e os bastidores <br />
        da vida de quem vive entre bugs, deploys e café.
      </p>
      <HeroSearchForm />
    </section>
  );
}
