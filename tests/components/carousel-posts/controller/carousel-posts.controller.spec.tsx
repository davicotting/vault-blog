import { render, screen } from "@testing-library/react";
import { CarouselPostsController } from "@/components/carousel-posts/controller/carousel-posts.controller";
import { Post } from "@/components/posts-layout/types";

vi.mock("@/components/ui/carousel", () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselNext: () => null,
  CarouselPrevious: () => null,
}));

const posts: Post[] = [
  { id: "1", title: "Post One", excerpt: "Excerpt", category: "Dev", date: "23 mai. 2026", slug: "post-one", imageUrl: "" },
  { id: "2", title: "Post Two", excerpt: "Excerpt", category: "Vida", date: "22 mai. 2026", slug: "post-two", imageUrl: "" },
];

describe("CarouselPostsController | (Unit)", () => {
  it("should render all posts", () => {
    render(<CarouselPostsController posts={posts} />);
    expect(screen.getByText("Post One")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();
  });
});
