"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {
  Sparkles,
  Eye,
  Target,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Building2,
  CheckCircle2,
  MessageCircle,
  Quote,
  User,
  ExternalLink,
  Camera,
  Layers,
  Award,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  initials: string;
  role: string;
  bio: string;
  isExecutive?: boolean;
  isOpenRole?: boolean;
}

const leadershipShowcase = [
  {
    id: "vinit-kumar",
    name: "Mr. Vinit Kumar",
    designation: "Director cum Founder",
    initials: "VK",
    highlight: "Primary Executive Leadership",
  },
  {
    id: "kajal-kumari",
    name: "Kajal Kumari",
    designation: "Director cum Co-Founder",
    initials: "KK",
    highlight: "Founding Board & Governance",
  },
  {
    id: "haresh-kumar",
    name: "Haresh Kumar",
    designation: "Executive Director cum Head Sales & Marketing",
    initials: "HK",
    highlight: "Commercial & Channel Growth",
  },
  {
    id: "gulshan-kumar",
    name: "Gulshan Kumar",
    designation: "Plant Operations & Logistic Head",
    initials: "GK",
    highlight: "Supply Chain & Factory Operations",
  },
];

const completeTeam: TeamMember[] = [
  {
    id: "vinit-kumar",
    name: "Mr. Vinit Kumar",
    designation: "Director cum Founder",
    initials: "VK",
    role: "Leadership & Strategy",
    bio: "Pioneering the startup's vision to empower Indian growers with accessible, lab-tested agri inputs, bridging the lab-to-land gap.",
    isExecutive: true,
  },
  {
    id: "kajal-kumari",
    name: "Kajal Kumari",
    designation: "Director cum Co-Founder",
    initials: "KK",
    role: "Governance & Strategic Direction",
    bio: "Guiding institutional compliance, ethical sourcing, and farmer-centric expansion strategies across Eastern India.",
    isExecutive: true,
  },
  {
    id: "haresh-kumar",
    name: "Haresh Kumar",
    designation: "Executive Director cum Head Sales & Marketing",
    initials: "HK",
    role: "Sales & Distributor Channels",
    bio: "Spearheading regional dealer networks, farmer-connect campaigns, and marketing across district distribution hubs.",
    isExecutive: true,
  },
  {
    id: "gulshan-kumar",
    name: "Gulshan Kumar",
    designation: "Plant Operations and Logistic Head",
    initials: "GK",
    role: "Plant Operations & Logistics",
    bio: "Overseeing manufacturing protocols, seed processing standards, warehousing safety, and punctual rural dispatch.",
  },
  {
    id: "sonu-kumar",
    name: "Sonu Kumar",
    designation: "Customer Support & Admin",
    initials: "SK",
    role: "Support & Corporate Admin",
    bio: "Managing seamless dealer support, farmer grievance redressal, administrative operations, and CRM documentation.",
  },
  {
    id: "hra-finance-head",
    name: "HRA Finance Head",
    designation: "Finance, Audit & Accounts",
    initials: "FH",
    role: "Financial Governance",
    bio: "Position Opening Soon. Seeking senior leadership to lead treasury management, tax compliance, and growth capitalization.",
    isOpenRole: true,
  },
];

const offeringsList = [
  "High-Yield Hybrid Crop Seeds",
  "Certified Agrochemicals",
  "PGR's (Plant Growth Regulators)",
  "Non-FCO Bio-Fertilizers",
  "Agronomic Farm Advisory",
  "Lab-to-Land Agri-Tech Innovation",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col antialiased mobile-content-wrapper w-full max-w-full overflow-x-clip">
      <Header />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 bg-emerald-950 text-white overflow-hidden border-b border-emerald-900/60">
        {/* Subtle agricultural grid & organic ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-700/25 via-emerald-950 to-zinc-950 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-200 text-xs font-semibold uppercase tracking-widest shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Richmud India Pvt Ltd. (ROM) • Founded 2025</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Empowering Farmers, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-200 to-emerald-400">
              Transforming Agriculture
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-emerald-100/85 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
            Headquartered in Halsi, Lakhisarai (Bihar), Richmud India Pvt Ltd. is a forward-thinking agricultural startup delivering elite hybrid seeds, crop protection, non-FCO bio-fertilizers, and lab-to-land agri-tech innovation to elevate farmer prosperity.
          </p>

          {/* Quick Stats / Badges Strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-emerald-200">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              📍 Halsi, Lakhisarai, Bihar (811306 / 811311)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              🌱 Agri Input & Agri Services
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              🔬 Lab to Land Agronomy
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: REFERENCE SPLIT SHOWCASE (INSPIRED BY SCREENSHOT)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: 4-CARD LEADERSHIP PHOTO CLUSTER */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
                  Leadership Bench
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  Prestige Leadership Grid
                </h3>
                <p className="text-xs text-slate-500">
                  Visionaries steering Richmud India's agricultural transformation.
                </p>
              </div>

              {/* 2x2 Framed Photo Cards Cluster */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                {leadershipShowcase.map((leader) => (
                  <div
                    key={leader.id}
                    className="bg-white rounded-2xl p-3 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-500/60 transition-all flex flex-col group"
                  >
                    {/* Framed Photo Placeholder (Aspect ratio 3/4) */}
                    <div
                      data-person-id={leader.id}
                      className="w-full aspect-[3/4] rounded-xl bg-gradient-to-b from-slate-100 via-slate-100 to-slate-200/80 border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-emerald-400 transition-colors"
                    >
                      {/* Avatar Initials Badge */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-base sm:text-lg tracking-wider">
                        {leader.initials}
                      </div>

                      {/* Small Camera / Placeholder Indicator */}
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-center gap-1 py-1 rounded-md bg-white/80 backdrop-blur-xs text-[9px] font-medium text-slate-500 border border-slate-200/70">
                        <Camera className="w-3 h-3 text-slate-400" />
                        <span>Official Portrait</span>
                      </div>
                    </div>

                    {/* Meta Underneath */}
                    <div className="pt-3 pb-1 flex flex-col">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                        {leader.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 line-clamp-2 mt-0.5 leading-snug">
                        {leader.designation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Executive Council & Operations Command • Halsi, Lakhisarai</span>
              </div>
            </div>

            {/* RIGHT COLUMN: CORPORATE NARRATIVE & DIRECTOR'S MESSAGE */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Founding Story & Mission</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                  About Richmud India & Director's Journey
                </h2>
              </div>

              {/* Startup Story Narrative */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Established in <strong className="text-slate-900">2025</strong> in <strong className="text-slate-900">Halsi, Lakhisarai (Bihar)</strong>, <strong className="text-slate-900">Richmud India Pvt Ltd. (ROM)</strong> is an agile agri-input startup committed to revolutionizing modern farming. We bridge scientific laboratories directly to local farmer lands, making top-tier crop nutrition, certified genetics, and agricultural inputs accessible to every village grower.
                </p>
                <p>
                  Our comprehensive product ecosystem encompasses high-performance hybrid field and vegetable seeds, targeted agrochemicals, plant growth regulators (PGRs), non-FCO bio-fertilizers, and end-to-end farm advisory services engineered to combat adverse climate fluctuations and maximize net farm income.
                </p>
              </div>

              {/* Director's Personal Message Block */}
              <div className="rounded-2xl bg-white p-6 sm:p-7 border border-emerald-200/90 shadow-sm relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-emerald-100 pointer-events-none" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-widest">
                    <span>Message from the Director</span>
                  </div>
                  <blockquote className="text-slate-800 text-sm sm:text-base italic leading-relaxed">
                    "As the director of Richmud India, my journey is driven by a vision to empower farmers with high-quality, affordable seeds, fertilizers, agrochemicals, and modern agricultural solutions. Overcoming initial challenges of building a trusted distributor network and winning farmer confidence, we remain committed to sustainable farming and introducing agri-tech innovation from lab to land to elevate farmer prosperity."
                  </blockquote>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Mr. Vinit Kumar</div>
                      <div className="text-xs text-emerald-700 font-medium">Director cum Founder, Richmud India Pvt Ltd.</div>
                    </div>
                    <span className="text-xs text-slate-400">Halsi, Bihar</span>
                  </div>
                </div>
              </div>

              {/* Offerings Highlight Pills */}
              <div className="space-y-2.5 pt-1">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Core Agri Portfolio & Offerings:
                </div>
                <div className="flex flex-wrap gap-2">
                  {offeringsList.map((offering, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-2xs hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors"
                    >
                      ✓ {offering}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: VISION, MISSION & VALUES (3-CARD GRID)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Vision, Mission & Core Values
            </h2>
            <p className="text-sm text-slate-600">
              The foundational pillars steering Richmud India's pledge to farm families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Vision */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-emerald-50/60 to-white border border-emerald-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <Eye className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                  Our Vision
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                  Rich Soil, Healthy Crops & Prosperous Farmers
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  "To become India's most trusted agri input & agri services partner, where the name 'Richmud' always stands for rich soil, healthy crops and prosperous farmers."
                </p>
              </div>
              <div className="pt-3 border-t border-emerald-100 text-xs font-semibold text-emerald-800">
                Pledge: Trusted Rural Partner
              </div>
            </div>

            {/* Mission */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-amber-50/40 to-white border border-amber-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                  <Target className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Our Mission
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                  Maximizing Every Farmer's Net Income
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  "To deliver high-quality affordable, Agri input & Agri services that maximize every farmer's income."
                </p>
              </div>
              <div className="pt-3 border-t border-amber-100 text-xs font-semibold text-amber-800">
                Pledge: Affordable Impact Inputs
              </div>
            </div>

            {/* Values */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-teal-50/50 to-white border border-teal-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                  Our Core Values
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                  Crop Security, High Yields & Innovation
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  "To empower farmers with high quality seeds, crop protection, Agri solutions, and innovative technologies that secure crops, boost yields and elevate farmer prosperity."
                </p>
              </div>
              <div className="pt-3 border-t border-teal-100 text-xs font-semibold text-teal-800">
                Pledge: Integrity from Lab to Land
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: COMPLETE MANAGEMENT TEAM & GOVERNANCE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
              Corporate Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Management Team & Department Heads
            </h2>
            <p className="text-sm text-slate-600">
              Meet the executive leaders and departmental commanders driving operations at Richmud India Pvt Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completeTeam.map((member) => (
              <div
                key={member.id}
                className={`p-6 rounded-2xl bg-white border transition-all flex flex-col justify-between space-y-4 shadow-2xs ${
                  member.isOpenRole
                    ? "border-dashed border-amber-300 bg-amber-50/20"
                    : "border-slate-200 hover:border-emerald-400 hover:shadow-sm"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center font-bold text-sm">
                      {member.initials}
                    </div>
                    {member.isOpenRole ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                        Opening Soon
                      </span>
                    ) : member.isExecutive ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                        Executive Board
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                        Operations
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                      {member.designation}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">{member.role}</span>
                  {member.isOpenRole ? (
                    <a
                      href="mailto:richmudindia@gmail.com?subject=Inquiry%20for%20Finance%20Head%20Role%20-%20Richmud%20India"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      Apply Now →
                    </a>
                  ) : (
                    <a
                      href="mailto:richmudindia@gmail.com"
                      className="text-emerald-700 hover:text-emerald-900 font-semibold"
                    >
                      Connect →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: CAREERS & INTERNSHIP (LAB TO LAND)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
              Join Our Mission
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Careers & Internship Programs
            </h2>
            <p className="text-sm text-slate-600">
              Be a catalyst in India's rural agricultural renaissance. Build your career with Richmud India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* INTERNSHIP CARD */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 border border-emerald-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
                    College Students & Graduates
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">
                    Richmud India Internship Program
                  </h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Gain hands-on field exposure to cutting-edge Agri input supply chains, lab-to-land seed trial observation, farmer-connect workshops, and digital agri-distribution. Mentored directly by seasoned agronomy heads.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real-world agricultural technology exposure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mentorship by Director & Operations Leads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Certificate of Completion & Pre-Placement Opportunities</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-100">
                <a
                  href="mailto:richmudindia@gmail.com?subject=Application%20for%20Richmud%20India%20Internship%20Program&body=Dear%20Richmud%20India%20Team,%0A%0AI%20am%20interested%20in%20applying%20for%20the%20Internship%20Program.%0A%0AName:%0ACollege/Degree:%0APhone:%0AResume%20attached."
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Apply for Internship (richmudindia@gmail.com)</span>
                </a>
              </div>
            </div>

            {/* CAREER OPPORTUNITIES CARD */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-amber-50/30 border border-amber-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                  <Briefcase className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800">
                    Full-Time Positions
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">
                    Job Opportunities in Agri-Transformation
                  </h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We are actively assembling a high-caliber team across Bihar and Eastern India. Explore rewarding careers in regional sales & marketing, supply chain operations, agronomy advisory, and administrative governance.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Regional Sales & Field Agronomy Executives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Warehouse & Logistics Supervisors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Finance, Accounts & Administration Openings</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-100">
                <a
                  href="mailto:richmudindia@gmail.com?subject=Job%20Application%20-%20Richmud%20India%20Pvt%20Ltd&body=Dear%20HR%20Team,%0A%0AI%20would%20like%20to%20apply%20for%20open%20positions%20at%20Richmud%20India.%0A%0APosition%20Applied:%0AExperience:%0APhone:%0APlease%20find%20my%20resume%20attached."
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-black text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Resume (richmudindia@gmail.com)</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: CORPORATE OFFICE & CONTACT STRIP
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                Direct Contact & Showroom
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Connect with Richmud India Pvt Ltd.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Reach out for dealership inquiries, bulk seed distribution, farmer advisory visits, or institutional partnerships.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917888585478?text=Hello%20Richmud%20India,%20I%20am%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:richmudindia@gmail.com"
                className="px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Bureau</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Corporate Headquarters</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Halsi, Lakhisarai, Bihar, India
                </p>
                <p className="text-xs text-amber-400 font-semibold mt-0.5">
                  Postal Pincode: 811306 / 811311
                </p>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Helpline & Inquiries</h4>
                <div className="mt-1 space-y-1">
                  <a
                    href="tel:+917888585478"
                    className="block text-xs font-mono font-medium text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    +91-7888585478 (Primary Contact)
                  </a>
                  <a
                    href="tel:+919572144270"
                    className="block text-xs font-mono font-medium text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    +91-9572144270 (Support Line)
                  </a>
                </div>
              </div>
            </div>

            {/* Email Bureau & Hours */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Official Correspondence</h4>
                <a
                  href="mailto:richmudindia@gmail.com"
                  className="block text-xs text-amber-300 hover:underline font-medium mt-1"
                >
                  richmudindia@gmail.com
                </a>
                <p className="text-[11px] text-slate-400 mt-1">
                  Mon – Sat: 9:00 AM – 6:30 PM IST
                </p>
              </div>
            </div>

          </div>

          {/* Social Channels List */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              <span>Official Channels: </span>
              <span className="text-slate-300 font-medium">Facebook • Instagram • LinkedIn • YouTube • X (Twitter) • WhatsApp</span>
            </div>
            <div className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Richmud India Pvt Ltd. (ROM). All rights reserved.
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
