import { promises as fs } from "node:fs";
import path from "node:path";

const ENQUIRIES_FILE = path.join(process.cwd(), "data", "contact-submissions.json");

async function ensureEnquiriesFile() {
  await fs.mkdir(path.dirname(ENQUIRIES_FILE), { recursive: true });

  try {
    await fs.access(ENQUIRIES_FILE);
  } catch {
    await fs.writeFile(ENQUIRIES_FILE, "[]\n", "utf8");
  }
}

async function readEnquiries() {
  await ensureEnquiriesFile();
  const raw = await fs.readFile(ENQUIRIES_FILE, "utf8");

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeEnquiries(enquiries) {
  await ensureEnquiriesFile();
  await fs.writeFile(ENQUIRIES_FILE, `${JSON.stringify(enquiries, null, 2)}\n`, "utf8");
}

export function sanitizeEnquiryInput(input = {}) {
  return {
    name: String(input.name || "").trim(),
    email: String(input.email || "").trim().toLowerCase(),
    message: String(input.message || "").trim(),
  };
}

export function validateEnquiryInput(input) {
  const errors = {};

  if (!input.name || input.name.length < 2) {
    errors.name = "Please enter a valid name.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailPattern.test(input.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!input.message || input.message.length < 10) {
    errors.message = "Please enter at least 10 characters in the message.";
  }

  return errors;
}

export async function createEnquiry(input) {
  const enquiries = await readEnquiries();
  const enquiry = {
    id: `ENQ_${Date.now()}`,
    ...input,
    createdAt: new Date().toISOString(),
    source: "website",
  };

  enquiries.unshift(enquiry);
  await writeEnquiries(enquiries);

  return enquiry;
}

export async function getEnquiries() {
  const enquiries = await readEnquiries();

  return enquiries.sort((left, right) => {
    return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
  });
}
