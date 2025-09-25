"use client";
import { useEffect, useState } from "react";

type Task = { id: number; title: string; done: boolean };

export default function ApiDemo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5178";
    fetch(`${base}/api/tasks`)
      .then((r) => r.json())
      .then(setTasks)
      .catch(() => {
        setError(true);
        setTasks([
          { id: 1, title: "Mock task: Design API", done: false },
          { id: 2, title: "Mock task: Connect Frontend", done: true },
        ]);
      });
  }, []);

  return (
    <>
      <h1 className="mb-3 text-2xl font-bold">Tasks (API Demo)</h1>
      {error && (
        <p className="mb-3 rounded-md bg-yellow-50 p-3 text-sm text-yellow-800">
          Backend not running — showing mock data
        </p>
      )}
      <ul className="list-disc pl-5">
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title} {t.done ? "✅" : ""}
          </li>
        ))}
      </ul>
    </>
  );
}
