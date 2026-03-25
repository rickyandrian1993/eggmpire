"use client";

import { calculateTimeLeft } from "@/app/lib/time";
import { useEffect, useState } from "react";
import type { TimeLeft } from "./types";

function TimeUnit({ value, label }: { value: number; label: string }) {
  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <span className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-none">
        {label === "Day(s)" ? value : format(value)}
      </span>
      <span className="text-[10px] sm:text-xs text-gray-400 mt-1">{label}</span>
    </div>
  );
}

function Separator() {
  return (
    <div className="hidden sm:block text-2xl md:text-3xl text-white/40">:</div>
  );
}

export default function CountdownClient({
  targetTime,
  serverNow,
}: {
  targetTime: number;
  serverNow: number;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const offset = serverNow - Date.now();

    const update = () => {
      const now = Date.now() + offset;
      setTimeLeft(calculateTimeLeft(targetTime, now));
    };

    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetTime, serverNow]);

  if (!timeLeft) return null;

  return (
    <div className="w-full flex justify-center px-4">
      <div
        className="
          w-full max-w-md
          bg-[#323232]/50 backdrop-blur-xl
          rounded-2xl sm:rounded-full
          border border-white/10
          px-4 py-4 sm:px-6
        "
      >
        {/* ✅ MOBILE: GRID (2x2) */}
        <div className="grid grid-cols-2 gap-y-4 sm:hidden text-center">
          <TimeUnit value={timeLeft.days} label="Day(s)" />
          <TimeUnit value={timeLeft.hours} label="Hour(s)" />
          <TimeUnit value={timeLeft.minutes} label="Minute(s)" />
          <TimeUnit value={timeLeft.seconds} label="Second(s)" />
        </div>

        {/* ✅ DESKTOP: FLEX */}
        <div className="hidden sm:flex items-center justify-center gap-4 md:gap-6">
          <TimeUnit value={timeLeft.days} label="Day(s)" />
          <Separator />
          <TimeUnit value={timeLeft.hours} label="Hour(s)" />
          <Separator />
          <TimeUnit value={timeLeft.minutes} label="Minute(s)" />
          <Separator />
          <TimeUnit value={timeLeft.seconds} label="Second(s)" />
        </div>
      </div>
    </div>
  );
}
