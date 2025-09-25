export default function About() {
    return (
      <>
        <h1 className="mb-3 text-2xl font-bold">About This Project</h1>
        <p className="text-gray-700">
          This is a simple demo built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, deployed on <strong>Vercel</strong>.
          It showcases modern frontend setup and will later integrate with a .NET API.
        </p>
        <ul className="mt-4 list-disc pl-5 text-sm text-gray-600">
          <li>Next.js App Router</li>
          <li>Tailwind v4</li>
          <li>Clean, minimalist UI</li>
        </ul>
      </>
    );
  }
  