import { PostFilterDropdownProps } from "../types";
import { PostFilterDropdownView } from "../view/post-filter-dropdown.view";

export function PostFilterDropdownController({ sortOrder, onSortChange }: PostFilterDropdownProps) {
  return <PostFilterDropdownView sortOrder={sortOrder} onSortChange={onSortChange} />;
}
