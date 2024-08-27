"use client";

import StoresBanner from "@/components/stores/storesBanner";
import StoresList from "@/components/stores/storesList";

export default function Stores() {
  return (
    <main className="bg-white">
      <StoresBanner />
      <StoresList />
    </main>
  );
}
