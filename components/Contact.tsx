"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-8 md:px-12 py-24 border-b border-rule">
      <p className="flex items-center gap-4 text-[0.65rem] tracking-[0.2em] uppercase text-wine mb-16 after:flex-1 after:h-px after:bg-rule">
        Contact
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left — intro */}
        <div>
          <h2
            className="font-serif font-light leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Let&apos;s talk about<br />
            <em className="italic text-wine">what&apos;s in the glass.</em>
          </h2>
          <p className="text-muted text-[0.95rem] leading-[1.8]">
            Open to conversations about wine sales, portfolio representation, and
            on-premise partnerships in the Columbus market and beyond.
          </p>
        </div>

        {/* Right — form */}
        <div>
          {status === "success" ? (
            <div className="border border-rule p-8">
              <p className="font-serif text-2xl font-light mb-2">Message sent.</p>
              <p className="text-muted text-[0.9rem]">Thanks for reaching out — I&apos;ll be in touch soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-[0.72rem] tracking-[0.15em] uppercase text-ink border-b border-ink pb-0.5 hover:text-wine hover:border-wine transition-colors duration-200"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-muted">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-rule py-2.5 text-[0.95rem] text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-muted">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-rule py-2.5 text-[0.95rem] text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-muted">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-transparent border-b border-rule py-2.5 text-[0.95rem] text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink transition-colors duration-200 resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              {status === "error" && (
                <p className="text-[0.8rem] text-wine">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="self-start mt-2 inline-flex items-center gap-3 text-[0.72rem] tracking-[0.15em] uppercase text-ink border-b border-ink pb-0.5 hover:text-wine hover:border-wine transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
