import { TextareaHTMLAttributes } from "react";

interface FloatingTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export default function FloatingTextarea({
  label,
  id,
  ...props
}: FloatingTextareaProps) {
  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder=" "
        rows={4}
        className="peer w-full bg-[#333333]/50 rounded-2xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all resize-none"
        {...props}
      />
      <label
        htmlFor={id}
        className="
          absolute left-4 top-4 text-gray-400 text-sm
          transition-all duration-200
          bg-[#2a2a2a] px-1

          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-sm

          peer-focus:-top-3
          peer-focus:left-2
          peer-focus:text-xs
          peer-focus:text-blue-400

          peer-not-placeholder-shown:-top-3
          peer-not-placeholder-shown:left-2
          peer-not-placeholder-shown:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}
