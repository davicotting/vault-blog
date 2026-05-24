import { CarouselPostProps } from "../types";
import { CarouselPostView } from "../view/carousel-post.view";

export function CarouselPostController({ post }: CarouselPostProps) {
  return <CarouselPostView post={post} />;
}
