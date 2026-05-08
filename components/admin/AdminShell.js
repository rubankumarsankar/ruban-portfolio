"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiDatabase, FiLock, FiMail, FiShield } from "react-icons/fi";
import { portfolioData } from "@/data/portfolio";

export default function AdminShell({ children }) {
  return (
    <div className="h-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_30%),linear-gradient(180deg,_#04070d_0%,_#0a1019_45%,_#06090f_100%)] text-white">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4 py-6 md:px-8 lg:px-10">
        <header className="border border-[#1b2432] bg-[#07101a]/90 backdrop-blur-xl">
          <div className="flex flex-col gap-6 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#38bdf8]">
                <FiShield size={22} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#38bdf8]">
                  Ruby Admin Console
                </p>
                <h1 className="mt-2 text-2xl font-bold font-sans text-white md:text-3xl">
                  Secure Enquiry Operations
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-gray-400">
                  Private admin area for portfolio enquiries, mail notifications, and WhatsApp follow-ups.
                </p>
              </div>
            </div>

            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 border border-[#38bdf8]/40 px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#38bdf8]"
              >
                <FiArrowLeft size={14} />
                Back To Site
              </motion.span>
            </Link>
          </div>
        </header>

        <div className="mt-6 grid min-h-0 flex-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="overflow-y-auto border border-[#1b2432] bg-[#07101a]/85 p-6 backdrop-blur-xl">
            <div className="border-b border-[#1b2432] pb-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-gray-500">Access Node</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-10 w-10 border border-[#38bdf8]/30 bg-[#38bdf8]/10" />
                <div>
                  <div className="text-lg font-semibold font-sans">{portfolioData.personalInfo.shortName}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-gray-500">
                    {portfolioData.personalInfo.version}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 py-6 text-sm text-gray-300">
              <div className="flex items-start gap-3 border border-[#1b2432] bg-[#0b131d] p-4">
                <FiLock className="mt-0.5 text-[#38bdf8]" size={16} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Auth Mode</div>
                  <div className="mt-1">Cookie session with private admin credentials</div>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-[#1b2432] bg-[#0b131d] p-4">
                <FiDatabase className="mt-0.5 text-[#38bdf8]" size={16} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Storage</div>
                  <div className="mt-1">Local enquiry store with admin review workflow</div>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-[#1b2432] bg-[#0b131d] p-4">
                <FiMail className="mt-0.5 text-[#38bdf8]" size={16} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Alerts</div>
                  <div className="mt-1">SMTP mail + WhatsApp quick action support</div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1b2432] pt-5 text-xs text-gray-500">
              <div>{portfolioData.personalInfo.email}</div>
              <div className="mt-2">{portfolioData.personalInfo.phone}</div>
            </div>
          </aside>

          <section className="min-h-0 overflow-y-auto border border-[#1b2432] bg-[#07101a]/80 p-4 backdrop-blur-xl md:p-6">
            {children}
          </section>
        </div>
      </div>
    </div>
  );
}
