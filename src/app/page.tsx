import AppMap from "@/components/app-map";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <div className="w-full h-full z-10 absolute top-0 left-0">
        <AppMap />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 p-4 flex justify-center items-center">
        nav
      </div>
    </main>
  );
}
