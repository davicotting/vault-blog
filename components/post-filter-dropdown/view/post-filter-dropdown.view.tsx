"use client";
import { SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { PostFilterDropdownProps } from "../types";

export function PostFilterDropdownView({
  onSortChange,
}: PostFilterDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="h-3.5 w-3.5" />
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => onSortChange("recentes")}>
          Mais recentes
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onSortChange("antigos")}>
          Mais antigos
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onSortChange("az")}>
          A — Z
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
