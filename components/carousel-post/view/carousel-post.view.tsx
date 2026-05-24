import { CarouselPostProps } from "../types";

export function CarouselPostView({ post }: CarouselPostProps) {
  return (
    <section
      className="relative rounded-2xl overflow-hidden h-full min-h-48 cursor-pointer group hover:opacity-75"
      style={{
        backgroundImage: `url(${post.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20" />
      <footer className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
        <span className="text-xs text-white/60 uppercase tracking-widest font-mono">
          {post.category}
        </span>
        <h4 className="font-semibold text-white text-3xl leading-snug">
          {post.title}
        </h4>
        <p className="text-muted-foreground text-sm">{post.excerpt}</p>
      </footer>
    </section>
  );
}
