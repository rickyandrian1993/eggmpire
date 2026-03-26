import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Image
        fill
        src="/images/bg.svg"
        alt="background"
        className="
          w-full h-full 
          object-cover 
          opacity-80 
          brightness-[0.3]
        "
      />
    </div>
  );
}
