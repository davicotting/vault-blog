"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostTabsProps } from "../types";

export function PostTabsView({ topics, activeTab, onTabChange }: PostTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange}>
      <TabsList>
        {topics.map((topic) => (
          <TabsTrigger key={topic.value} value={topic.value}>
            {topic.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
