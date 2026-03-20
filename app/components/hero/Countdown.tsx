"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date("2026-08-08T00:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null; // Avoid hydration mismatch
  }

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center min-w-[80px]">
      <span className="text-3xl md:text-5xl font-bold text-white tracking-wider">
        {label === "Day(s)" ? value : formatNumber(value)}
      </span>
      <span className="text-[10px] md:text-xs text-gray-400 mt-1 font-medium">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <div className="text-2xl md:text-4xl font-light text-white/50 self-start mt-1 md:mt-2">
      :
    </div>
  );

  return (
    <div className="inline-flex items-center justify-center px-6 md:px-12 py-4 md:py-6 bg-[#2a2624]/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
      <div className="flex items-center gap-2 md:gap-8">
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
