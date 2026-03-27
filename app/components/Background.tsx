import Image from "next/image";

export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ transform: "translateZ(0)" }} // forces GPU layer on iOS
    >
      <div
        className="absolute inset-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100dvw",
          height: "100dvh",
          // iOS Safari fix: use dvh as fallback
          minHeight: "-webkit-fill-available",
        }}
      >
        <Image
          fill
          src="/images/bg.svg"
          alt="background"
          priority // preload so it doesn't flash on mount
          className="object-cover opacity-80 brightness-[0.3]"
          style={{
            position: "absolute",
            willChange: "transform", // promotes to GPU composite layer
          }}
        />
      </div>
    </div>
  );
}
