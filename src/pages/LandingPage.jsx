import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import screenshot from "../assets/screenshot.png";
import FadeIn from "../animations/FadeIn";

export default function LandingPage() {
  useEffect(() => {
    document.body.setAttribute("theme-mode", "light");
    document.title = "TruQalis Studio | The Unified Project Blueprint";
  }, []);

  return (
    <div className="selection:bg-emerald-100 selection:text-emerald-900 font-sans bg-white text-slate-900">
      <Navbar />

      {/* Hero Section: The "What is it?" Answer */}
      <section className="px-6 py-24 md:py-16 max-w-7xl mx-auto border-b border-slate-50">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <FadeIn duration={0.6}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
              Architectural Intelligence Platform
            </div>
          </FadeIn>

          <FadeIn duration={0.8} delay={0.2}>
            <h1 className="text-8xl md:text-5xl font-black tracking-tighter leading-[0.9] text-slate-900">
              One Blueprint. <br/>
              <span className="text-emerald-600">Zero Knowledge Gaps.</span>
            </h1>
          </FadeIn>

          <FadeIn duration={0.8} delay={0.4}>
            <p className="text-xl md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              TruQalis Studio is a workspace that unifies <strong>Project Requirements</strong>, 
              <strong> Database Modeling</strong>, and <strong>API Design</strong>. We help teams 
              eliminate technical friction by building a single "Source of Truth" for every project.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The "How it Works" Section: Explaining the Workflow */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl text-slate-900 font-bold">1</div>
            <h3 className="text-2xl font-black tracking-tight">Requirement Mapping</h3>
            <p className="text-slate-500 leading-relaxed">
              Stop losing logic in Slack or PDFs. Map your <strong>PRD/FRD</strong> directly in the studio so every developer knows exactly what is being built.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-xl text-emerald-600 font-bold">2</div>
            <h3 className="text-2xl font-black tracking-tight">Visual ERD Builder</h3>
            <p className="text-slate-500 leading-relaxed">
              Design high-fidelity database schemas visually. Export production-ready <strong>SQL (PostgreSQL, MySQL, SQLite)</strong> in one click.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl text-slate-900 font-bold">3</div>
            <h3 className="text-2xl font-black tracking-tight">API Lab & Contracts</h3>
            <p className="text-slate-500 leading-relaxed">
              Connect your database to your endpoints. Generate <strong>OpenAPI v3.1</strong> specs and <strong>Postman Collections</strong> instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="py-20 border-t border-slate-100 bg-white px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center md:flex-col gap-10">
          <div>
            <div className="text-3xl font-black tracking-tighter">
              TruQalis<span className="text-emerald-600">Studio</span>
            </div>
            <p className="text-slate-400 text-sm mt-2">Precision-grade Project Architecture.</p>
          </div>
          
          <div className="text-right md:text-center">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">TruQalis Intelligence Workspace</p>
            <p className="text-xs text-slate-400 mt-1">&copy; {new Date().getFullYear()} TruQalis Studio.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}