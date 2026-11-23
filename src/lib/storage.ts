import fs from "fs";
import path from "path";
import { ContactEnquiry } from "@/types";

export type StoredLead = ContactEnquiry & {
  id: string;
  createdAt: string;
  status: "new" | "contacted" | "qualified" | "archived";
};

const DATA_DIR = path.join(process.cwd(), "src", "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

function ensureDirectoryExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

export function saveLead(enquiry: ContactEnquiry): StoredLead {
  ensureDirectoryExists();

  const fileContent = fs.readFileSync(LEADS_FILE, "utf-8");
  let leads: StoredLead[] = [];
  try {
    leads = JSON.parse(fileContent);
  } catch {
    leads = [];
  }

  const newLead: StoredLead = {
    ...enquiry,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  leads.unshift(newLead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");

  return newLead;
}

export function getLeads(): StoredLead[] {
  ensureDirectoryExists();
  try {
    const fileContent = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(fileContent);
  } catch {
    return [];
  }
}

