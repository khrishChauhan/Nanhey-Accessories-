import Header from "@/components/header/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-extrabold text-slate-800">
          Welcome to Nanhey Accessories
        </h1>
        <p className="mt-2 text-slate-600">
          Your Trusted Security Partner in Begusarai, Bihar.
        </p>
      </div>
    </main>
  );
}
