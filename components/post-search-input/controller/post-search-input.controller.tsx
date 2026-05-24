import { PostSearchInputProps } from "../types";
import { PostSearchInputView } from "../view/post-search-input.view";

export function PostSearchInputController({ value, onUserTyping }: PostSearchInputProps) {
  return <PostSearchInputView value={value} onUserTyping={onUserTyping} />;
}
