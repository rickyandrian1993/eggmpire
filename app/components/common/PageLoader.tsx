"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-9999 bg-[#0f0f0f] flex items-center justify-center">
      {/* Loader */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated ring */}
        <div className="w-14 h-14 border-2 border-white/20 border-t-[#E8A921] rounded-full animate-spin" />

        {/* Text */}
        <p className="text-white/70 text-sm tracking-widest animate-pulse">
          LOADING
        </p>
      </div>
    </div>
  );
}
