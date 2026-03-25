"use client";

import Image from "next/image";
import FloatingInput from "../common/FloatingInput";
import FloatingTextarea from "../common/FloatingTextarea";

function ContactIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
      <Image src={src} alt={alt} width={20} height={20} />
    </div>
  );
}

export default function ContactUs() {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    if (!data.name || !data.email || !data.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("data", data);
  };

  return (
    <div className="bg-[#2a2a2a]/60 backdrop-blur-xl rounded-[28px] p-6 md:p-12 shadow-2xl">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 md:mb-12">
        Get In Touch With Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {/* LEFT: FORM */}
        <form
          id="contact-form"
          className="space-y-6 md:space-y-8"
          onSubmit={submitForm}
        >
          <FloatingInput id="name" name="name" label="Name" />
          <FloatingInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
          />
          <FloatingTextarea id="message" name="message" label="Message" />
        </form>

        {/* RIGHT: INFO + BUTTON */}
        <div className="flex flex-col justify-between h-full items-start">
          {/* Contact Info */}
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Email */}
            <div className="flex items-center gap-4 text-white group cursor-pointer">
              <ContactIcon src="/icons/email.svg" alt="email" />
              <span className="text-base md:text-lg">admin@eggmpire.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 text-white group cursor-pointer">
              <ContactIcon src="/icons/phone.svg" alt="phone" />
              <span className="text-base md:text-lg">+62 811 2140807</span>
            </div>

            {/* Telegram */}
            <div className="flex items-center gap-4 text-white group cursor-pointer">
              <ContactIcon src="/icons/telegram.svg" alt="telegram" />
              <span className="text-base md:text-lg">+62 811 2140807</span>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-8 md:mt-10 w-full">
            <button
              type="submit"
              form="contact-form"
              className="w-full md:w-auto px-8 md:px-10 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors shadow-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
