import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";
import Head from "next/head";
import {
  FiBriefcase, FiMapPin, FiUsers, FiFileText, FiShield,
  FiBook, FiAlertTriangle, FiDatabase, FiGlobe, FiCreditCard,
  FiPhone, FiActivity
} from "react-icons/fi";
import BGVServiceSection from "@/components/BgvServiceSection/BGVServiceSection";

const bgvServices = [
  {
    id: 1,
    icon: <FiBriefcase size={32} color="#1e3a8a" />,
    img: "/bgv/employment.webp",
    title: "Employment Verification",
    desc: "We verify the candidate's complete employment history directly with previous employers — including designation, dates of joining and exit, reporting manager, and reason for leaving.",
    desc1: "Ensures the candidate's professional background is authentic and free from misrepresentation.",
    points: [
      "Organisation name & designation confirmation",
      "Dates of joining and exit verification",
      "Reporting manager validation",
      "Reason for leaving cross-check",
    ],
    docs: ["Relieving Letter", "Experience Letter", "Offer Letter", "Salary Slips"],
    tat: "3–5 Business Days",
  },
  {
    id: 2,
    icon: <FiMapPin size={32} color="#1e3a8a" />,
    img: "/bgv/address.webp",
    title: "Address Verification",
    desc: "Physical or digital verification of the candidate's current and permanent residential address through field investigation or document-based checks.",
    desc1: "Confirms the candidate resides at the stated address and validates identity through residence.",
    points: [
      "Current & permanent address verification",
      "Field investigation by local agents",
      "Document-based address checks",
      "Rental agreement validation if applicable",
    ],
    docs: ["Current / Permanent Address Proof", "Rental Agreement (if rented)"],
    tat: "2–4 Business Days",
  },
  {
    id: 3,
    icon: <FiCreditCard size={32} color="#1e3a8a" />,
    img: "/bgv/credit.webp",
    title: "Credit Check",
    desc: "Verification of the candidate's financial background including credit score, loan defaults, and financial liabilities to assess financial integrity.",
    desc1: "Particularly important for roles handling finance, banking, or sensitive company assets.",
    points: [
      "Credit score assessment",
      "Loan default history check",
      "Financial liability review",
      "Bankruptcy or insolvency check",
    ],
    docs: ["PAN Card", "Date of Birth Proof", "Address Proof"],
    tat: "1–2 Business Days",
  },
  {
    id: 4,
    icon: <FiShield size={32} color="#1e3a8a" />,
    img: "/bgv/identity.webp",
    title: "Identity Verification",
    desc: "Verification of government-issued ID documents such as Aadhaar, PAN, Passport, Voter ID, and Driving License through official databases.",
    desc1: "Ensures the candidate is who they claim to be, preventing identity fraud at the point of hire.",
    points: [
      "Aadhaar, PAN, Passport verification",
      "Voter ID & Driving License checks",
      "Cross-check with official government databases",
      "Identity Confirmed / Discrepancy Report",
    ],
    docs: ["Name of the Candidate", "Father's Name", "Date of Birth", "Address Proof", "Identity Proof"],
    tat: "1–2 Business Days",
  },
  {
    id: 5,
    icon: <FiBook size={32} color="#1e3a8a" />,
    img: "/bgv/education.webp",
    title: "Education Verification",
    desc: "Verification of academic credentials including degree certificates, mark sheets, and roll numbers directly with universities, boards, and educational institutions.",
    desc1: "Prevents credential fraud and ensures candidates meet the academic qualifications required for the role.",
    points: [
      "Degree & diploma certificate verification",
      "Mark sheet and roll number check",
      "Direct confirmation from universities/boards",
      "Educational institution validation",
    ],
    docs: ["Degree / Diploma Certificates", "Mark Sheets", "Date of Attendance"],
    tat: "3–7 Business Days",
  },
  {
    id: 6,
    icon: <FiAlertTriangle size={32} color="#1e3a8a" />,
    img: "/bgv/criminal.webp",
    title: "Criminal Background Check",
    desc: "Screening through court records, police verification databases, FIR records, and national/state criminal databases to identify any adverse legal history.",
    desc1: "Protects the organisation from onboarding individuals with undisclosed criminal records.",
    points: [
      "Court record and FIR screening",
      "National & state criminal database check",
      "Police verification (written & verbal)",
      "Criminal Clear / Adverse Record Report",
    ],
    docs: ["2 Address Proofs", "1 Photo Identity", "4 Photographs", "Birth Proof", "Stay Agreement with Notary (if rented)"],
    tat: "5–7 Business Days",
  },
  {
    id: 7,
    icon: <FiUsers size={32} color="#1e3a8a" />,
    img: "/bgv/reference.webp",
    title: "Reference Check",
    desc: "Structured professional reference interviews with previous managers, supervisors, or peers to assess work ethics, performance, conduct, and character.",
    desc1: "Provides qualitative insights into the candidate's professional behaviour and interpersonal skills.",
    points: [
      "Professional & personal reference interviews",
      "Work ethics and performance assessment",
      "Conduct and character evaluation",
      "Reference Interview Summary Report",
    ],
    docs: ["Professional Reference Contact Details", "Personal Reference Contact Details"],
    tat: "2–3 Business Days",
  },
  {
    id: 8,
    icon: <FiDatabase size={32} color="#1e3a8a" />,
    img: "/bgv/database.webp",
    title: "Database Screening",
    desc: "Screening against global and national sanctions lists, politically exposed persons (PEP) lists, and regulatory exclusion databases.",
    desc1: "Essential for compliance-heavy industries such as banking, insurance, and financial services.",
    points: [
      "Global & national sanctions list check",
      "PEP (Politically Exposed Persons) screening",
      "Regulatory exclusion database check",
      "Database Screening Clearance Report",
    ],
    docs: ["Name of the Candidate", "Father's Name", "Date of Birth", "Address Proof", "Identity Proof"],
    tat: "1–2 Business Days",
  },
  {
    id: 9,
    icon: <FiGlobe size={32} color="#1e3a8a" />,
    img: "/bgv/global.webp",
    title: "Global Verification Checks",
    desc: "Cross-border verification of employment, education, criminal records, and identity for candidates with international exposure or work history.",
    desc1: "Ideal for MNCs and organisations hiring candidates with overseas backgrounds.",
    points: [
      "International employment verification",
      "Overseas education credential checks",
      "Cross-border criminal record screening",
      "International Verification Report",
    ],
    docs: ["Name of the Candidate", "Father's Name", "Date of Birth Proof", "Passport Copy"],
    tat: "7–14 Business Days",
  },
  {
    id: 10,
    icon: <FiFileText size={32} color="#1e3a8a" />,
    img: "/bgv/document.webp",
    title: "Document Verification",
    desc: "Authenticity check of all submitted documents including educational certificates, experience letters, offer letters, relieving letters, and government IDs.",
    desc1: "Reduces the risk of document fraud and ensures all submitted records are genuine.",
    points: [
      "Educational certificate authenticity check",
      "Experience & offer letter verification",
      "Government ID document validation",
      "Document Authenticity Report",
    ],
    docs: ["All Submitted Documents (Samples Required)"],
    tat: "2–3 Business Days",
  },
  {
    id: 11,
    icon: <FiPhone size={32} color="#1e3a8a" />,
    img: "/bgv/police.webp",
    title: "Police Verification",
    desc: "Criminal verification done following standard procedures including written verification and verbal verification from the local police station.",
    desc1: "Mandatory for many roles and provides an official confirmation of clean criminal record.",
    points: [
      "Written verification from police station",
      "Verbal verification for urgent cases",
      "FIR and case history check",
      "Official Police Clearance Certificate",
    ],
    docs: ["2 Address Proofs", "1 Photo Identity", "4 Photographs", "Birth Proof", "Stay Agreement with Notary (if rented)"],
    tat: "5–10 Business Days",
  },
  {
    id: 12,
    icon: <FiActivity size={32} color="#1e3a8a" />,
    img: "/bgv/drug.webp",
    title: "Drug Test",
    desc: "A screening test to determine if the employee is under the influence of any substance including marijuana, opioids, alcohol, and other controlled substances.",
    desc1: "Ensures a safe, productive, and compliant workplace environment, especially for safety-sensitive roles.",
    points: [
      "Multi-panel drug screening",
      "Detection of marijuana, opioids & others",
      "Suitable for safety-sensitive positions",
      "Certified Lab Test Report",
    ],
    docs: ["Samples Required"],
    tat: "1–3 Business Days",
  },
];

const BGVServices = () => {
  return (
    <>
      <Head>
        <title>Brainhunt Ventures – Background Verification Services</title>
        <meta
          name="description"
          content="BrainHunt Ventures offers comprehensive background verification services including employment, education, criminal, address, identity, credit checks and more to help you hire with confidence."
        />
        <meta
          name="keywords"
          content="Brainhunt Ventures, background verification, BGV, employment verification, criminal check, address verification, education verification, identity check"
        />
        <meta name="author" content="Brainhunt Ventures" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.brainhuntventures.com/BGVServices" />
      </Head>

      <main>
        <HeroAll
          title="Background Verification Services"
          subtitle="Comprehensive, fast, and reliable BGV solutions to help you hire with complete confidence"
        />

        <BGVServiceSection/>

        {/* <About
          img="/bgv.webp"
          head="Background Verification"
          desc="At BrainHunt Ventures, we provide end-to-end background verification services tailored to your hiring needs. Our rigorous multi-source verification process ensures every candidate's credentials are authentic and trustworthy."
          desc1="From identity and employment to global checks and drug testing, we cover every aspect of candidate screening — delivering accurate, audit-ready reports within defined turnaround times."
          points={[
            "12+ types of verification services under one roof",
            "Fast turnaround: most checks completed in 1–7 business days",
            "Compliant with DPDPA and data security standards",
            "Trusted by 200+ organisations across India and globally",
          ]}
        /> */}

        {/* BGV Services List */}
        <section style={{ padding: "60px 5vw", background: "#fff" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ color: "#1e3a8a", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "12px" }}>
              Our BGV Services
            </h2>
            <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Explore our full range of background verification components — each designed for accuracy, speed, and compliance.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            {bgvServices.map((service, index) => (
              <div
                key={service.id}
                style={{
                  display: "flex",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  gap: "48px",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                {/* Image side */}
                <div style={{ flex: "0 0 300px", minWidth: "260px" }}>
                  <div
                    style={{
                      background: "#eff6ff",
                      borderRadius: "16px",
                      padding: "32px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "16px",
                      border: "1px solid #dbeafe",
                    }}
                  >
                    <div
                      style={{
                        width: "72px", height: "72px", borderRadius: "50%",
                        background: "#dbeafe", display: "flex",
                        alignItems: "center", justifyContent: "center",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3 style={{ color: "#1e3a8a", fontWeight: 700, fontSize: "1.1rem", textAlign: "center", margin: 0 }}>
                      {service.title}
                    </h3>
                    {/* TAT badge */}
                    <div
                      style={{
                        background: "#1e3a8a", color: "#fff",
                        borderRadius: "999px", padding: "4px 16px",
                        fontSize: "0.78rem", fontWeight: 600,
                      }}
                    >
                      TAT: {service.tat}
                    </div>
                    {/* Required Docs */}
                    <div style={{ width: "100%", marginTop: "8px" }}>
                      <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1e3a8a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                        Required Documents
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
                        {service.docs.map((doc, i) => (
                          <li key={i} style={{ fontSize: "0.82rem", color: "#334155", display: "flex", gap: "6px", alignItems: "flex-start" }}>
                            <span style={{ color: "#1e3a8a", fontWeight: 700, marginTop: "1px" }}>›</span> {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div style={{ flex: 1, minWidth: "260px" }}>
                  <h3 style={{ color: "#1e3a8a", fontWeight: 800, fontSize: "1.4rem", marginBottom: "12px" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: "#475569", lineHeight: 1.75, marginBottom: "10px", fontSize: "0.97rem" }}>
                    {service.desc}
                  </p>
                  <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "20px", fontSize: "0.93rem" }}>
                    {service.desc1}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {service.points.map((point, i) => (
                      <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "0.92rem", color: "#334155" }}>
                        <span
                          style={{
                            width: "20px", height: "20px", borderRadius: "50%",
                            background: "#dbeafe", color: "#1e3a8a",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "0.65rem", fontWeight: 800, flexShrink: 0, marginTop: "1px",
                          }}
                        >
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default BGVServices;