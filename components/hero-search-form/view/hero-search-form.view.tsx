import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSearchFormProps } from "../types";
import { Input } from "@/components/ui/input";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export function HeroSearchFormView({ handleSearch }: HeroSearchFormProps) {
  return (
    <form onSubmit={handleSearch} className="flex items-center gap-4">
      <div className="relative">
        <Input
          placeholder="Buscar posts, tópicos..."
          className="h-14 lg:w-100 placeholder:text-sm lg:text-base"
        />

        <KbdGroup className="absolute right-4 top-1/2 -translate-y-1/2">
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>

      <Button className={"h-14 w-14"}>
        <Search />
      </Button>
    </form>
  );
}
