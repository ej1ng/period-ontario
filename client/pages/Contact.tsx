import { FormEvent, useState } from "react";
import { ContactRequest, ContactResponse } from "@shared/api";
import PageHeader from "../components/PageHeader";

type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };

const inputClass =
  "w-full rounded-lg border border-black/20 bg-white px-4 py-3 font-inter text-base focus:outline-none focus:ring-2 focus:ring-[#EF4036] focus:border-transparent";

export default function Contact() {
  const [form, setForm] = useState<ContactRequest>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const update = (field: keyof ContactRequest) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as ContactResponse;
      if (res.ok && data.success) {
        setStatus({ type: "success", message: data.message });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch {
      setStatus({
        type: "error",
        message: "We couldn't send your message. Please try again later.",
      });
    }
  }

  return (
    <main className="w-full">
      <PageHeader
        title="CONTACT US"
        subtitle="Want to volunteer, partner with us, book a PERIOD talk, or donate products? We'd love to hear from you."
      />

      <section className="max-w-2xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block font-inter font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              value={form.name}
              onChange={update("name")}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-inter font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
              value={form.email}
              onChange={update("email")}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-inter font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              maxLength={5000}
              value={form.message}
              onChange={update("message")}
              className={`${inputClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status.type === "sending"}
            className="self-start bg-black text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-[#EF4036] transition-colors disabled:opacity-60"
          >
            {status.type === "sending" ? "SENDING..." : "SEND MESSAGE"}
          </button>

          <div aria-live="polite">
            {status.type === "success" && (
              <p className="font-inter rounded-lg bg-green-50 text-green-800 px-4 py-3">
                {status.message}
              </p>
            )}
            {status.type === "error" && (
              <p className="font-inter rounded-lg bg-red-50 text-red-800 px-4 py-3">
                {status.message}
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}
