"use client";

import { calculateTimeLeft } from "@/app/lib/time";
import { useEffect, useState } from "react";
import type { TimeLeft } from "./types";

function TimeUnit({ value, label }: { value: number; label: string }) {
  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center min-w-20">
      <span className="text-3xl md:text-5xl font-bold text-white">
        {label === "Day(s)" ? value : format(value)}
      </span>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}

function Separator() {
  return <div className="text-3xl text-white/50">:</div>;
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

  // 👇 prevent hydration mismatch WITHOUT mounted state
  if (!timeLeft) return null;

  return (
    <div className="inline-flex items-center px-6 py-4  bg-[#323232]/50 backdrop-blur-xl rounded-full border border-white/10">
      <div className="flex items-center gap-4 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Day(s)" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="Hour(s)" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="Minute(s)" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="Second(s)" />
      </div>
    </div>
  );
}
