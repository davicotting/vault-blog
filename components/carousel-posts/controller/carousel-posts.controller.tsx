import { CarouselPostsProps } from "../types";
import { CarouselPostsView } from "../view/carousel-posts.view";

export function CarouselPostsController({ posts }: CarouselPostsProps) {
  return <CarouselPostsView posts={posts} />;
}
