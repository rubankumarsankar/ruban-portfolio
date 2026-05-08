"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function AdminDashboard({ enquiries, adminEmail, contactInfo }) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const stats = useMemo(() => {
    return {
      total: enquiries.length,
      today: enquiries.filter((item) => {
        const created = new Date(item.createdAt);
        const now = new Date();

        return (
          created.getFullYear() === now.getFullYear() &&
          created.getMonth() === now.getMonth() &&
          created.getDate() === now.getDate()
        );
      }).length,
    };
  }, [enquiries]);

  async function handleLogout() {
    setIsLoggingOut(true);

    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
      router.push("/ruby");
      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="flex flex-col gap-4 border border-[#1f2937] bg-[#090d14] p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[#38bdf8] text-xs tracking-[0.3em] uppercase mb-3">Ruby Console</p>
          <h1 className="text-3xl font-bold font-sans text-white">Enquiry Inbox</h1>
          <p className="mt-3 text-sm text-gray-400">
            Signed in as {adminEmail}. Mail notifications go to {contactInfo.email}, and WhatsApp quick actions use {contactInfo.phone}.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="min-w-32 border border-[#1f2937] bg-[#0d1117] px-5 py-4">
            <div className="text-xs tracking-widest text-gray-500">TOTAL</div>
            <div className="mt-2 text-2xl font-bold text-white">{stats.total}</div>
          </div>
          <div className="min-w-32 border border-[#1f2937] bg-[#0d1117] px-5 py-4">
            <div className="text-xs tracking-widest text-gray-500">TODAY</div>
            <div className="mt-2 text-2xl font-bold text-white">{stats.today}</div>
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="border border-[#38bdf8] px-5 py-4 text-xs font-bold tracking-[0.2em] uppercase text-[#38bdf8] disabled:opacity-60"
          >
            {isLoggingOut ? "Signing out..." : "Logout"}
          </motion.button>
        </div>
      </div>

      {enquiries.length === 0 ? (
        <div className="border border-dashed border-[#1f2937] bg-[#090d14] p-10 text-center text-sm text-gray-400">
          No enquiries have been submitted yet.
        </div>
      ) : (
        <div className="grid gap-6">
          {enquiries.map((enquiry) => {
            const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
              `New portfolio enquiry\nName: ${enquiry.name}\nEmail: ${enquiry.email}\nMessage: ${enquiry.message}`,
            )}`;

            return (
              <div key={enquiry.id} className="border border-[#1f2937] bg-[#090d14] p-6">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="text-[#38bdf8] text-xs tracking-[0.25em] uppercase">{enquiry.id}</div>
                    <h2 className="mt-3 text-2xl font-semibold font-sans text-white">{enquiry.name}</h2>
                    <p className="mt-2 text-sm text-gray-400">{formatDate(enquiry.createdAt)}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${enquiry.email}`}
                      className="border border-[#1f2937] px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase text-white transition-colors hover:border-[#38bdf8]"
                    >
                      Reply by Mail
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#38bdf8] px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase text-[#0d1117]"
                    >
                      Send WhatsApp
                    </a>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[240px_1fr]">
                  <div className="space-y-3 border border-[#1f2937] bg-[#0d1117] p-4 text-sm text-gray-300">
                    <div>
                      <div className="text-[11px] tracking-widest text-gray-500">EMAIL</div>
                      <div className="mt-1 break-all">{enquiry.email}</div>
                    </div>
                    <div>
                      <div className="text-[11px] tracking-widest text-gray-500">SOURCE</div>
                      <div className="mt-1 uppercase">{enquiry.source}</div>
                    </div>
                  </div>

                  <div className="border border-[#1f2937] bg-[#0d1117] p-4">
                    <div className="text-[11px] tracking-widest text-gray-500 mb-3">MESSAGE</div>
                    <p className="whitespace-pre-wrap text-sm leading-7 text-gray-200">{enquiry.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
