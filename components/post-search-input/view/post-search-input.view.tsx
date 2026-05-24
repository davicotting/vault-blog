"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PostSearchInputProps } from "../types";

export function PostSearchInputView({ value, onUserTyping }: PostSearchInputProps) {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
      <Input
        placeholder="Buscar..."
        className="h-8 pl-8 w-40 text-sm"
        value={value}
        onChange={(e) => onUserTyping(e.target.value)}
      />
    </div>
  );
}
