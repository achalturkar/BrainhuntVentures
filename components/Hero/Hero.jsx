"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Link from "next/link";
import { FiArrowRight, FiUsers, FiShield, FiDollarSign, FiTrendingUp, FiArrowDown } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const stats = [
  { value: 500, suffix: "+", label: "Candidates Placed" },
  { value: 200, suffix: "+", label: "Partner Companies" },
  { value: 99,  suffix: "%", label: "Accuracy Rate" },
  { value: 10,  suffix: "+", label: "Years Experience" },
];

const services = [
  { icon: <FiUsers size={15} />,      label: "Recruitment" },
  { icon: <FiDollarSign size={15} />, label: "Payroll" },
  { icon: <FiTrendingUp size={15} />, label: "HR Consulting" },
  { icon: <FiShield size={15} />,     label: "BGV" },
];

export default function Hero() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
    const nextRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);


//     const scrollToNext = () =>({
// href: "#about"
// });


  return (
    <>
      <style>{`
        .hero-wrap {
          min-height: 98vh;
          background: #030f26;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          position: relative;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 110px 5vw 70px 6vw;
          position: relative;
          z-index: 2;
        }

        .hero-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .hero-left::after {
          content: '';
          position: absolute;
          top: 20%;
          left: -10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(37,99,235,0.14);
          border: 1px solid rgba(59,130,246,0.35);
          border-radius: 999px;
          padding: 5px 16px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 26px;
          width: fit-content;
          position: relative;
          z-index: 1;
        }

        .blink-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #60a5fa;
          animation: blink 2s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.25} }

        .hero-title {
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #f0f6ff;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .hero-title em {
          font-style: normal;
          color: #3b82f6;
        }

        .hero-slogan {
          font-size: 0.97rem;
          color: #64748b;
          font-style: italic;
          letter-spacing: 0.01em;
          margin-bottom: 18px;
          line-height: 1.7;
          position: relative;
          z-index: 1;
          border-left: 2px solid #1d4ed8;
          padding-left: 14px;
        }

        .hero-desc {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.78;
          max-width: 500px;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .service-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 36px;
          position: relative;
          z-index: 1;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.8rem;
          font-weight: 500;
          color: #94a3b8;
          transition: all 0.2s;
        }
        .pill:hover {
          border-color: rgba(59,130,246,0.45);
          color: #93c5fd;
          background: rgba(37,99,235,0.08);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 52px;
          position: relative;
          z-index: 1;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2563eb;
          color: #fff;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 12px 26px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #93c5fd;
          font-weight: 600;
          font-size: 0.92rem;
          padding: 12px 26px;
          border-radius: 10px;
          border: 1px solid rgba(59,130,246,0.35);
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-outline:hover { border-color: #3b82f6; color: #fff; transform: translateY(-2px); }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          position: relative;
          z-index: 1;
        }

        .stat-cell {
          padding: 20px 12px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .stat-cell:last-child { border-right: none; }

        .stat-num {
          font-size: 1.75rem;
          font-weight: 800;
          color: #60a5fa;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 5px;
        }
        .stat-lbl {
          font-size: 0.68rem;
          color: #475569;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        /* image side */
        .hero-right {
          position: relative;
          overflow: hidden;
        }

        .hero-right::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, #030f26 0%, rgba(3,15,38,0.3) 28%, transparent 50%),
            linear-gradient(to top, #030f26 0%, transparent 30%);
          z-index: 1;
          pointer-events: none;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.65) saturate(0.85);
        }

        .float-card {
          position: absolute;
          bottom: 44px;
          left: 28px;
          z-index: 2;
          background: rgba(3,15,38,0.88);
          border: 1px solid rgba(59,130,246,0.22);
          border-radius: 14px;
          padding: 16px 22px;
          backdrop-filter: blur(14px);
        }
        .float-card-label {
          font-size: 0.68rem;
          color: #475569;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .float-card-value {
          font-size: 1.35rem;
          font-weight: 800;
          color: #f0f6ff;
          letter-spacing: -0.02em;
        }
        .float-card-sub {
          font-size: 0.75rem;
          color: #3b82f6;
          margin-top: 3px;
          font-weight: 500;
        }

         /* ── SCROLL ARROW ── */
        .scroll-arrow-wrap {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
 
        /* expanding ripple rings */
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(59, 130, 246, 0.5);
          animation: ripple 2.6s ease-out infinite;
        }
        .ring-1 { width: 48px;  height: 48px;  animation-delay: 0s; }
        .ring-2 { width: 70px;  height: 70px;  animation-delay: 0.7s; }
        .ring-3 { width: 96px;  height: 96px;  animation-delay: 1.4s; }
 
        @keyframes ripple {
          0%   { transform: scale(0.55); opacity: 0.8; }
          100% { transform: scale(1);    opacity: 0;   }
        }
 
        /* arrow button */
        .scroll-btn {
          position: relative; z-index: 2;
          width: 46px; height: 46px; border-radius: 50%;
          background: rgba(37, 99, 235, 0.25);
          border: 1.5px solid rgba(59, 130, 246, 0.55);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #93c5fd;
          transition: background 0.25s;
          animation: nudge 2.2s ease-in-out infinite;
          outline: none;
        }
        .scroll-btn:hover { background: rgba(37, 99, 235, 0.5); }
 
        @keyframes nudge {
          0%, 100% { transform: translateY(0);  }
          50%       { transform: translateY(6px); }
        }
        @media (max-width: 900px) {
          .hero-wrap { grid-template-columns: 1fr; min-height: auto; }
          .hero-right { height: 320px; order: -1; }
          .hero-right::before {
            background: linear-gradient(to top, #030f26 0%, transparent 50%);
          }
          .hero-left { padding: 48px 6vw 64px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-cell:nth-child(2) { border-right: none; }
          .float-card { display: none; }
        }
      `}</style>

      <section className="hero-wrap">

        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-eyebrow">
            <span className="blink-dot" />
            Trusted HR Partner
          </div>

          <h1 className="hero-title">
            People‑First.<br />
            <em>Results‑Driven.</em>
          </h1>

          <p className="hero-slogan">
            Your workforce is your greatest asset.<br />
            We help you find it, grow it, and protect it.
          </p>

          <p className="hero-desc">
            At BrainHunt Ventures, we deliver tailored BGV Verification, HR solutions that simplify
            staffing, streamline compliance, and empower your business to grow
            with the right talent — fast, reliable, and efficient.
          </p>

          {/* <div className="service-pills">
            {services.map((s, i) => (
              <span className="pill" key={i}>{s.icon} {s.label}</span>
            ))}
          </div> */}

          <div className="hero-actions">
            <Link href="/contact" className="btn-primary behavior:smooth" >
              Connect With Us <FiArrowRight size={15} />
            </Link>
            <Link href="#services" className="btn-outline" style={{ behavior: "smooth" }}>
              Explore Services
            </Link>
          </div>
{/* 
              <div className="flex gap-3">
                      {[ { icon: FaInstagram, href: "https://www.instagram.com/brainhuntventures/" }, { icon: FaLinkedin, href: "https://www.linkedin.com/company/brainhunt-venture-pvt-ltd/" }].map((social, idx) => (
                        <Link
                          key={idx}
                          href={social.href}
                          target="_blank"
                          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-400 transition"
                        >
                          <social.icon className="text-white text-lg" />
                        </Link>
                      ))}
                    </div> */}

                     <div className="flex justify-start gap-4 text-blue-900 text-3xl">
            {/* <Link href="https://www.facebook.com/brainhuntventures/"><FaFacebook className="hover:text-blue-600 transition-colors duration-200" /></Link> */}
            <Link href="https://www.instagram.com/brainhuntventures/"><FaInstagram className="hover:text-pink-500 transition-colors duration-200" /></Link>
            {/* <Link href="https://twitter.com/brainhuntventures"><FaTwitter className="hover:text-sky-400 transition-colors duration-200" /></Link> */}
            <Link href="https://www.linkedin.com/company/brainhunt-venture-pvt-ltd/"><FaLinkedin className="hover:text-blue-700 transition-colors duration-200" /></Link>
          </div>

          {/* <div className="stats-grid" ref={ref}>
            {stats.map((s, i) => (
              <div className="stat-cell" key={i}>
                <div className="stat-num">
                  {started
                    ? <CountUp end={s.value} duration={2.2} suffix={s.suffix} />
                    : `0${s.suffix}`}
                </div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div> */}

        </div>

        {/* RIGHT — Unsplash image */}
        <div className="hero-right">
          <img
            src="/herov.avif"
            alt="Professional HR team collaborating in a modern office"
            className="hero-img"
          />
          {/* <div className="float-card">
            <div className="float-card-label">This Month</div>
            <div className="float-card-value">48 Placements</div>
            <div className="float-card-sub">↑ 23% vs last month</div>
          </div> */}
        </div>

            <div className="scroll-arrow-wrap">
          <span className="ring ring-1" />
          <span className="ring ring-2" />
          <span className="ring ring-3" />
          <button className="scroll-btn" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} aria-label="Scroll to next section">
            <FiArrowDown size={18} />
          </button>
        </div>

      </section>
    </>
  );
}