import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Ogün’s Blog",
  description: "Next.js + Tailwind demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">
            <Link href="/" className="text-xl font-bold">Ogün’s Blog</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/api-demo" className="hover:underline">API Demo</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-4xl p-6">{children}</main>
        <footer className="mx-auto max-w-4xl border-t p-4 text-xs text-gray-500">
          Deployed on Vercel • © {new Date().getFullYear()} Ogün Çimen
        </footer>
      </body>
    </html>
  );
}
