"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const payload = await response.json();

      if (!response.ok) {
        setError(payload.message || "Login failed.");
        return;
      }

      router.push("/ruby/dashboard");
      router.refresh();
    } catch {
      setError("Unable to reach the login endpoint.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md border border-[#1f2937] bg-[#090d14] p-8 shadow-2xl">
      <div className="mb-8">
        <p className="text-[#38bdf8] text-xs tracking-[0.3em] uppercase mb-3">Ruby Access</p>
        <h1 className="text-3xl font-bold font-sans text-white">Admin Login</h1>
        <p className="text-sm text-gray-400 mt-3">
          Sign in to review saved enquiries from the portfolio contact form.
        </p>
      </div>

      <div className="space-y-5">
        <label className="block">
          <span className="block text-xs text-[#38bdf8] mb-2 tracking-widest">EMAIL</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full bg-transparent border border-[#1f2937] px-4 py-3 text-sm text-gray-100 focus:outline-none focus:border-[#38bdf8]"
            placeholder="Enter admin email"
            autoComplete="username"
          />
        </label>

        <label className="block">
          <span className="block text-xs text-[#38bdf8] mb-2 tracking-widest">PASSWORD</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full bg-transparent border border-[#1f2937] px-4 py-3 text-sm text-gray-100 focus:outline-none focus:border-[#38bdf8]"
            placeholder="Enter admin password"
            autoComplete="current-password"
          />
        </label>
      </div>

      {error ? (
        <p className="mt-4 border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className="mt-6 w-full bg-[#38bdf8] px-5 py-3 text-sm font-bold tracking-[0.2em] uppercase text-[#0d1117] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Authenticating..." : "Unlock Console"}
      </motion.button>
    </form>
  );
}
