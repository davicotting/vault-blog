"use client";
import { ActivityHeader } from "@/components/activity-header";
import { CarouselPosts } from "@/components/carousel-posts";
import { PostTabs } from "@/components/post-tabs";
import { PostSearchInput } from "@/components/post-search-input";
import { PostFilterDropdown } from "@/components/post-filter-dropdown";
import { PostsLayoutProps } from "../types";

export function PostsLayoutView({
  mainPosts,
  activityHeader,
  topics,
  searchQuery,
  activeTab,
  sortOrder,
  onSearchChange,
  onTabChange,
  onSortChange,
}: PostsLayoutProps) {
  return (
    <div className="flex flex-col flex-1 gap-10 min-h-0">
      <ActivityHeader
        avatarSrc={activityHeader.avatarSrc}
        status={activityHeader.status}
        activities={activityHeader.activities}
      />

      <aside className="flex flex-col flex-1 min-h-0">
        <div className="flex items-center justify-between gap-4 mb-3 shrink-0">
          <h1 className="tracking-tight text-2xl shrink-0">Posts</h1>

          <div className="flex items-center gap-2">
            <PostSearchInput value={searchQuery} onUserTyping={onSearchChange} />
            <PostTabs
              topics={topics}
              activeTab={activeTab}
              onTabChange={onTabChange}
            />
            <PostFilterDropdown
              sortOrder={sortOrder}
              onSortChange={onSortChange}
            />
          </div>
        </div>

        <CarouselPosts posts={mainPosts} />
      </aside>
    </div>
  );
}
