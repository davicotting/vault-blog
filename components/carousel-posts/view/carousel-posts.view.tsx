"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselPost } from "@/components/carousel-post";
import { CarouselPostsProps } from "../types";

export function CarouselPostsView({ posts }: CarouselPostsProps) {
  return (
    <Carousel opts={{ align: "start" }} className="flex-1 min-h-0 h-full cursor-grabbing">
      <CarouselContent className="h-full">
        {posts.map((post) => (
          <CarouselItem key={post.id} className="md:basis-1/3">
            <CarouselPost post={post} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-8" />
      <CarouselNext className="right-8" />
    </Carousel>
  );
}
