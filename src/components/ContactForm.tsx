import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }, 1200);
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh] py-8 px-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#f5f5f5] rounded-xl shadow-lg p-6 flex flex-col gap-5"
        aria-label="Contact form"
      >
        <h2 className="text-xl font-semibold mb-2 text-[#171717]">
          Contact Me
        </h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-sm text-[#171717]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Your name"
            className="rounded-md border border-[#E5E5E5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] bg-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-sm text-[#171717]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="you@email.com"
            className="rounded-md border border-[#E5E5E5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] bg-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="font-medium text-sm text-[#171717]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Type your message..."
            rows={5}
            className="rounded-md border border-[#E5E5E5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] bg-white resize-none"
          />
        </div>
        <button
          type="submit"
          className="mt-2 rounded-full bg-[#171717] text-white px-6 py-2 text-sm font-medium shadow hover:invert transition-all disabled:opacity-60"
          disabled={loading}
          aria-busy={loading}
          aria-label="Send message"
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {showToast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#171717] text-white px-6 py-3 rounded-lg shadow-lg z-50 text-sm animate-fade-in">
            Message sent! Thank you for reaching out. I'll get back to you soon.
          </div>
        )}
      </form>
    </div>
  );
}
