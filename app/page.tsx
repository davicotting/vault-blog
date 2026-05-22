import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="flex h-screen flex-col p-12">
      <Header />

      <section
        className="flex-1 flex items-center justify-center"
      >
        <h1 className="text-3xl font-bold">Hello, World!</h1>
      </section>
    </main>
  );
}
