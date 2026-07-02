import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  FileText,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Fingerprint,
  MapPin,
  CardSim,
} from "lucide-react";

/**
 * BGVServiceCard
 * ----------------
 * A compact, homepage-friendly promo card for Brainhunt Ventures' BGV
 * (Background Verification) service. Designed to sit as ONE section
 * among others on the homepage — not a full-height hero.
 *
 * Props:
 *  - websiteUrl   : link to the BGV service site      (default provided)
 *  - brochureUrl  : link/path to the BGV proposal PDF (pass your real file)
 *
 * Usage:
 *   <BGVServiceCard brochureUrl="/files/BGV-Proposal-Brochure.pdf" />
 *
 * Requires: tailwindcss, lucide-react
 */

const CHECKS = [
  { icon: Briefcase, label: "Employment" },
  { icon: GraduationCap, label: "Education" },
  { icon: Fingerprint, label: "Criminal" },
  { icon: MapPin, label: "Address" },
  { icon: CardSim, label: "Identity" },
];

export default function BGVServiceCard({
  websiteUrl = "https://bgv.brainhuntventures.com/",
  brochureUrl = "/BVPL Background-Verification-Services.pdf",
}) {
  return (
    <section className="px-6 py-14 lg:px-24 font-sans  ">
      <style>{`
        @keyframes bgv-pulse-ring {
          0% { transform: scale(0.9); opacity: 0.55; }
          70%, 100% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes bgv-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .bgv-shimmer {
          background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 25%, #1e3a8a 50%, #f97316 75%, #1e3a8a 100%);
          background-size: 300% 100%;
          animation: bgv-shimmer 6s linear infinite;
        }
      `}</style>

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-900/5">
        {/* top accent bar */}
        <div className="bgv-shimmer h-1.5 w-full" />

        <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 md:grid-cols-[auto,1fr,auto] md:items-center md:gap-10">
          {/* ---- Icon badge ---- */}
          {/* <div className="relative mx-auto flex h-24 w-24 shrink-0 items-center justify-center md:mx-0">
            <span
              className="absolute inset-0 rounded-full border-2 border-orange-400/70"
              style={{ animation: "bgv-pulse-ring 2.2s ease-out infinite" }}
            />
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-950 shadow-lg shadow-blue-900/30">
              <ShieldCheck className="h-10 w-10 text-white" strokeWidth={1.75} />
            </div>
          </div> */}

          {/* ---- Content ---- */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-600">
              <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
              Background verification Service
            </span>

            <h2 className="mt-3 text-2xl font-extrabold leading-snug text-blue-900 sm:text-3xl">
              Hire with confidence.
              <span className="text-orange-500"> Verify every candidate.</span>
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600 md:mx-0 sm:text-base">
              Fast, accurate and fully compliant background checks —
              employment, education, criminal &amp; address — backed by a
              24-hour average turnaround.
            </p>

            {/* mini check pills */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              {CHECKS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-xs font-medium text-blue-800 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ---- CTAs ---- */}
          <div className="flex flex-col md:flex-row items-center gap-3 ">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-400/60 active:scale-95 md:w-auto"
            >
              Visit BGV Website
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-blue-800 px-6 py-3 text-sm font-semibold text-blue-800 transition-all duration-300 hover:bg-blue-800 hover:text-white active:scale-95 md:w-auto"
            >
              <FileText className="h-4 w-4" />
              Download Brochure
            </a>
          </div>
        </div>

        {/* stats footer strip */}
        <div className="grid grid-cols-3 divide-x divide-blue-100 border-t border-blue-100 bg-blue-50/50">
          {[
            { value: "3,000+", label: "Verifications done" },
            { value: "24 hrs", label: "Avg. turnaround" },
            { value: "99%", label: "Accuracy rate" },
          ].map((s) => (
            <div key={s.label} className="px-2 py-4 text-center">
              <p className="text-lg font-extrabold text-blue-900 sm:text-xl">
                {s.value}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}