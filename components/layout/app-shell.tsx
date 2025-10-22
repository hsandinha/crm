"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {isSidebarOpen ? (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            role="presentation"
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="relative ml-auto h-full w-[85%] max-w-xs shadow-2xl">
            <Sidebar
              variant="mobile"
              onClose={() => setIsSidebarOpen(false)}
              onNavigate={() => setIsSidebarOpen(false)}
            />
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="relative flex-1 overflow-y-auto bg-transparent px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pt-10">
          <div className="mx-auto max-w-6xl space-y-12">{children}</div>
        </main>
      </div>
    </div>
  );
}
