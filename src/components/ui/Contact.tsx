"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // The 'required' attribute in the HTML handles the UI validation.
    // This check is a secondary backup.
    if (!form.name || !form.email || !form.message) {
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        "service_07qjmf2", // Your Service ID
        "template_t4u5bd7", // Your Template ID
        {
          from_name: form.name,
          to_name: "Fidele",
          from_email: form.email,
          to_email: "ndihokubwafidele@gmail.com",
          message: form.message,
        },
        "QWwnbWPwy4foN4vt-" // Your Public Key
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" }); // Clear form

          // Reset Button State after 3 seconds
          setTimeout(() => {
            setStatus("idle");
          }, 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          alert("Failed to send message. Please try again or contact me directly on WhatsApp.");
          setStatus("idle");
        }
      );
  };

  return (
    <section id="contact" className="w-full py-32 px-6 bg-white flex justify-center">
      <div className="w-full max-w-5xl">
        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
          Available for Projects
        </p>
        <h2 className="text-[10vw] md:text-[6vw] leading-[0.9] font-black text-[#1a1a1a] mb-16">
          Let's create <span className="italic font-serif text-purple-600">magic.</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Form Side */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required // 👈 ADDED CONSTRAINT
                className="w-full border-b border-gray-300 py-4 outline-none focus:border-purple-600 transition-colors bg-transparent placeholder:text-gray-400 text-lg"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email" // 👈 ENSURES VALID EMAIL FORMAT
                name="email"
                placeholder="Email Address"
                required // 👈 ADDED CONSTRAINT
                className="w-full border-b border-gray-300 py-4 outline-none focus:border-purple-600 transition-colors bg-transparent placeholder:text-gray-400 text-lg"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your vision..."
              required // 👈 ADDED CONSTRAINT
              className="w-full border-b border-gray-300 py-4 outline-none focus:border-purple-600 transition-colors bg-transparent placeholder:text-gray-400 resize-none text-lg"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            {/* Dynamic Button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className={`mt-8 px-10 py-4 rounded-full w-fit font-bold text-lg transition-all duration-300 ${
                status === "success"
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-[#1a1a1a] text-white hover:bg-purple-600"
              }`}
            >
              {status === "idle" && "Send Proposal →"}
              {status === "sending" && "Sending..."}
              {status === "success" && "Message Sent!"}
              {status === "error" && "Try Again"}
            </button>
          </form>

          {/* Info Side */}
          <div className="md:w-1/3 flex flex-col gap-10">
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-2">
                Location
              </h4>
              <p className="text-xl font-medium text-[#1a1a1a]">Kigali, Rwanda</p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-2">
                Email
              </h4>
              <a
                href="mailto:ndihokubwafidele@gmail.com"
                className="text-xl font-medium text-[#1a1a1a] hover:text-purple-600 transition-colors"
              >
                ndihokubwafidele@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-2">
                Phone
              </h4>
              <p className="text-xl font-medium text-[#1a1a1a]">+250 790 147 995</p>
            </div>

            {/* SOCIAL ICONS (Only Logos) */}
            <div className="mt-4">
              <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-4">
                Connect
              </h4>
              <div className="flex gap-6">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/fidele-ndihokubwayo-a72767333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-[#0077b5] transition-colors duration-300 hover:scale-110 transform"
                >
                  <FaLinkedin />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/fid_el_e_ndihokubwayo/?hl=en" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-[#E1306C] transition-colors duration-300 hover:scale-110 transform"
                >
                  <FaInstagram />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/250790147995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-[#25D366] transition-colors duration-300 hover:scale-110 transform"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}