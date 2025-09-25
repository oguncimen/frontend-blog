import Image from "next/image";

export default function Home() {
  const posts = [
    { id: 1, title: "Designing scalable APIs", summary: "Tips for building APIs that scale efficiently." },
    { id: 2, title: "Next.js SSR vs SSG", summary: "When to prefer server-side rendering vs static generation." },
    { id: 3, title: "Docker for Developers", summary: "Containerize apps with minimal effort." },
  ];

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-indigo-600">Ogün’s Blog</h1>
      <ul className="grid gap-4">
        {posts.map((p) => (
          <li key={p.id} className="rounded-xl border bg-white p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.summary}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
