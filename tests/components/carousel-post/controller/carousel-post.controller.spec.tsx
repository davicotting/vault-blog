import { render, screen } from "@testing-library/react";
import { CarouselPostController } from "@/components/carousel-post/controller/carousel-post.controller";
import { Post } from "@/components/posts-layout/types";

const post: Post = {
  id: "1",
  title: "Test Post Title",
  excerpt: "Test excerpt",
  category: "Dev",
  date: "23 mai. 2026",
  slug: "test-post",
  imageUrl: "https://example.com/image.jpg",
};

describe("CarouselPostController | (Unit)", () => {
  it("should render the post title", () => {
    render(<CarouselPostController post={post} />);
    expect(screen.getByText("Test Post Title")).toBeInTheDocument();
  });

  it("should render the post category", () => {
    render(<CarouselPostController post={post} />);
    expect(screen.getByText("Dev")).toBeInTheDocument();
  });
});
