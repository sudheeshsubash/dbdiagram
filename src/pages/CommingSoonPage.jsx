import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FadeIn from "../animations/FadeIn";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Coming Soon | TruQalis Studio Intelligence";
  }, []);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <FadeIn duration={0.8}>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            System Expansion in Progress
          </div>

          <h1 className="text-6xl md:text-4xl font-black text-zinc-900 tracking-tighter mb-6 leading-[0.9]">
            The Next Phase of <br />
            <span className="text-emerald-600">Project Intelligence.</span>
          </h1>

          <p className="text-zinc-500 text-xl md:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-16">
            TruQalis is evolving. We are refining the unified blueprint approach to bridge 
            the gap between architectural design and rapid, high-quality delivery.
          </p>

        <div className="flex flex-col gap-4 items-center">
            {/* Primary Action */}
            <Link
            to="/"
            className="py-4 px-10 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
            >
            Back to Studio Home
            </Link>

        </div>
        
        </FadeIn>
      </main>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-zinc-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="flex items-center gap-6 mb-6">
            <Link to="/" className="text-zinc-400 hover:text-indigo-600 text-xs font-bold uppercase tracking-widest transition-colors">Return Home</Link>
            <div className="h-4 w-px bg-zinc-200" />
            <a href="#" className="text-zinc-400 hover:text-indigo-600 text-xl transition-colors"><i className="bi bi-github" /></a>
            <a href="#" className="text-zinc-400 hover:text-indigo-600 text-xl transition-colors"><i className="bi bi-linkedin" /></a>
          </div>
          <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.4em]">
            TruQalis Studio • The Unified Project Workspace
          </p>
        </div>
      </footer>
    </div>
  );
}