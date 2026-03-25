"use client";

import { useEffect, useState } from "react";
import PageLoader from "./common/PageLoader";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // small delay = smoother UX (important!)
      setTimeout(() => setLoading(false), 400);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* Loader */}
      <div
        className={`
          fixed inset-0 z-9999 transition-opacity duration-700
          ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <PageLoader />
      </div>

      {/* Content */}
      <div
        className={`
          transition-all duration-700 ease-out
          ${loading ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}
        `}
      >
        {children}
      </div>
    </>
  );
}
