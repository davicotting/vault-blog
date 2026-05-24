"use client";
import { useState } from "react";
import { ACTIVITY_HEADER } from "@/app/utils/mocks/activity-header/activity-header";
import { POSTS } from "@/app/utils/mocks/posts/posts";
import { TOPICS } from "@/app/utils/mocks/topics/topics";
import { PostsLayoutView } from "../view/posts-layout.view";

export function PostsLayoutController() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("todos");
  const [sortOrder, setSortOrder] = useState("recentes");

  function handleSearchChange(value: string) {
    setSearchQuery(value);
  }

  function handleTabChange(value: string) {
    setActiveTab(value);
  }

  function handleSortChange(value: string) {
    setSortOrder(value);
  }

  return (
    <PostsLayoutView
      mainPosts={POSTS}
      activityHeader={ACTIVITY_HEADER}
      topics={TOPICS}
      searchQuery={searchQuery}
      activeTab={activeTab}
      sortOrder={sortOrder}
      onSearchChange={handleSearchChange}
      onTabChange={handleTabChange}
      onSortChange={handleSortChange}
    />
  );
}
