import { ReactNode } from "react";

interface TermsBlockProps {
  title: string;
  children: ReactNode;
}

export default function TermsBlock({ title, children }: TermsBlockProps) {
  return (
    <div className="space-y-3 md:space-y-4">
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
        {title}
      </h3>
      <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
