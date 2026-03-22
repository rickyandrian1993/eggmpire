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
  const [offset] = useState(() => serverNow - Date.now());

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetTime, serverNow),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now() + offset; // 👈 synced time
      setTimeLeft(calculateTimeLeft(targetTime, now));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime, offset]);

  return (
    <div className="inline-flex items-center px-6 py-4 bg-black/60 backdrop-blur-xl rounded-full border border-white/10">
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
