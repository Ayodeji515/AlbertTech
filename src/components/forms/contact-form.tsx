"use client";

import * as React from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
  ShieldCheck,
  Building,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

interface FormState {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  companyName: string;
  service: string;
  budget: string;
  projectDescription: string;
  honeypot: string; // Anti-spam hidden field
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  countryCode: "+1",
  phone: "",
  companyName: "",
  service: "Website Design & Development",
  budget: siteConfig.budgetRanges[1],
  projectDescription: "",
  honeypot: "",
};

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [successData, setSuccessData] = React.useState<{
    leadId: string;
    createdAt: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validation
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid business email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your phone number.");
      return;
    }
    if (formData.projectDescription.trim().length < 15) {
      setErrorMessage(
        "Please provide a few details regarding your project scope (at least 15 characters)."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const fullPhoneNumber = `${formData.countryCode} ${formData.phone.trim()}`;
      const payload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: fullPhoneNumber,
        companyName: formData.companyName.trim() || undefined,
        service: formData.service,
        budget: formData.budget,
        projectDescription: formData.projectDescription.trim(),
        honeypot: formData.honeypot,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSuccessData({
        leadId: data.leadId || "REF-" + Date.now().toString().slice(-6),
        createdAt: data.createdAt || new Date().toISOString(),
      });
      setFormData(initialFormState);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please contact us via WhatsApp or email.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {successData ? (
        <div className="p-6 sm:p-10 rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Enquiry Received
          </h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
            Thank you for reaching out. Your project enquiry has been registered under reference{" "}
            <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
              {successData.leadId}
            </span>
            . One of our senior solutions architects will personally review your brief and reply within 24 business hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20ALBERTECH,%20I%20just%20submitted%20project%20enquiry%20${successData.leadId}`}
              isExternal
              variant="whatsapp"
              size="md"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Follow up on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => setSuccessData(null)}
              className="w-full sm:w-auto"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage && (
            <div className="p-3.5 rounded-xl border border-rose-300 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />
              <div>
                <p className="font-semibold">Unable to submit enquiry</p>
                <p className="mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Hidden Spam Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave this blank</label>
            <input
              id="honeypot"
              name="honeypot"
              type="text"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div className="w-full">
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Elena Rostova"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors text-sm"
              />
            </div>

            {/* Email Address */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Business Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="elena@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Mobile-Responsive Phone Number Input (Zero Overlap Guaranteed) */}
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="w-full flex items-stretch rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-500 overflow-hidden">
                <div className="shrink-0 bg-slate-100 dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700 flex items-center">
                  <select
                    name="countryCode"
                    aria-label="Country Dial Code"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-20 sm:w-24 px-2 py-2.5 bg-transparent text-slate-800 dark:text-slate-200 text-xs font-semibold focus:outline-none cursor-pointer"
                  >
                    {siteConfig.countryCodes.map((item) => (
                      <option
                        key={item.code + item.country}
                        value={item.code}
                        className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                      >
                        {item.code} ({item.country.split("/")[0].trim()})
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="555 019 283"
                  className="flex-1 min-w-0 w-full px-3 sm:px-3.5 py-2.5 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="w-full">
              <label
                htmlFor="companyName"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Company <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <div className="relative w-full">
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Acme International"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors text-sm"
                />
                <Building className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Service Required */}
            <div className="w-full">
              <label
                htmlFor="service"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Service of Interest <span className="text-rose-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors text-sm cursor-pointer"
              >
                <option value="Website Design & Development">Website Design & Development</option>
                <option value="E-commerce Solutions">E-commerce Solutions</option>
                <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                <option value="Business Automation Systems">Business Automation Systems</option>
                <option value="Integrated Multi-Service Consultation">Integrated Multi-Service Consultation</option>
              </select>
            </div>

            {/* Estimated Project Budget */}
            <div className="w-full">
              <label
                htmlFor="budget"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Estimated Budget <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors text-sm cursor-pointer"
              >
                {siteConfig.budgetRanges.map((bracket) => (
                  <option key={bracket} value={bracket}>
                    {bracket}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div className="w-full">
            <label
              htmlFor="projectDescription"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Project Overview & Goals <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows={4}
              required
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Tell us about your organization, current challenges, timeline targets, and what you aim to achieve..."
              className="w-full px-3.5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors text-sm leading-relaxed"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Minimum 15 characters. All project enquiries are kept confidential under mutual non-disclosure standards.
            </p>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[200px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Sending Enquiry...
                </>
              ) : (
                <>
                  <span>Send Project Enquiry</span>
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Strict confidentiality. Your contact details are never shared or sold.</span>
          </div>
        </form>
      )}
    </div>
  );
}
