"use client";

import { APIProvider } from "@vis.gl/react-google-maps";

const MAP_API_KEY = process.env.NEXT_PUBLIC_MAP_KEY || "";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <APIProvider apiKey={MAP_API_KEY} version="alpha">
      {children}
    </APIProvider>
  );
}
