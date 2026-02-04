import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <div className="min-h-full">
      <header className="relative bg-white shadow-sm">
        <NavBar />
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Your content */}
        </div>
      </main>
    </div>
  );
}
