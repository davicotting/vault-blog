import { PostTabsProps } from "../types";
import { PostTabsView } from "../view/post-tabs.view";

export function PostTabsController({ topics, activeTab, onTabChange }: PostTabsProps) {
  return <PostTabsView topics={topics} activeTab={activeTab} onTabChange={onTabChange} />;
}
