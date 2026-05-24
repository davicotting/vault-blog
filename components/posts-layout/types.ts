import { ActivityHeaderProps } from "@/components/activity-header/types";
import { Topic } from "@/components/post-tabs/types";

export type { ActivityHeaderProps, Topic };

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  imageUrl: string;
}

export interface PostsLayoutProps {
  mainPosts: Post[];
  activityHeader: ActivityHeaderProps;
  topics: Topic[];
  searchQuery: string;
  activeTab: string;
  sortOrder: string;
  onSearchChange: (value: string) => void;
  onTabChange: (value: string) => void;
  onSortChange: (value: string) => void;
}
