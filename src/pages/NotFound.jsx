import { Link } from "react-router-dom";
import { socials } from "../data/socials";
import FadeIn from "../animations/FadeIn";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 bg-zinc-50">
      <FadeIn duration={0.6}>
        <div className="max-w-2xl w-full bg-white border border-zinc-200 rounded-[2.5rem] p-16 md:p-8 shadow-sm text-center">
          {/* Visual Indicator */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-indigo-50 text-indigo-600 text-4xl mb-8">
            <i className="bi bi-geo-alt-slash" />
          </div>

          <h1 className="text-4xl font-black text-zinc-900 tracking-tighter mb-4">
            Page Not Found
          </h1>
          
          <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-10">
            The path you are looking for isn't part of the current project map. 
            Let's get you back to the architect's desk to continue building.
          </p>

          <div className="flex flex-col gap-4 items-center">
            {/* Primary Action */}
            <Link
              to="/"
              className="py-4 px-10 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
            >
              Back to Studio Home
            </Link>

            {/* Support Links */}
            <div className="flex gap-6 mt-6 text-sm font-bold text-zinc-400 uppercase tracking-widest">
              <a href={socials.docs} className="hover:text-indigo-600 transition-colors">
                Documentation
              </a>
              <span className="text-zinc-200">|</span>
              <a href="mailto:support@truqalis.com" className="hover:text-indigo-600 transition-colors">
                Contact Lead
              </a>
              <span className="text-zinc-200">|</span>
              <a href={socials.discord} className="hover:text-indigo-600 transition-colors">
                Community
              </a>
            </div>
          </div>

          {/* Quick Tip / Hint */}
          <div className="mt-16 pt-8 border-t border-zinc-100">
            <div className="inline-block px-3 py-1 rounded-md bg-zinc-100 text-[10px] font-bold text-zinc-500 uppercase tracking-tighter mb-3">
              Architect's Pro-Tip
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto italic">
              "To reduce delivery pain points, ensure your database schema and API contracts are synchronized before starting frontend development."
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
            <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.3em]">
                TruQalis Studio • Directed by TruQalis
            </div>
        </div>
      </FadeIn>
    </div>
  );
}