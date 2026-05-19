import type { ReactNode } from "react";

export default function SplitPanelLayout({ nav, children }: { nav: ReactNode; children: ReactNode }) {
  return (
    <div className="split-grid container w-screen">
      <div className="split-left col-span-4 flex h-auto min-h-screen flex-col py-4 sm:sticky sm:top-0 sm:h-[100dvh] sm:py-0">
        {nav}
      </div>
      <div className="split-right col-span-4 flex flex-col py-4 sm:col-span-5 sm:py-0">
        {children}
      </div>
    </div>
  );
}
