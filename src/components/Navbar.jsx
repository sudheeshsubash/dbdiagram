import { useState } from "react";
import { Link } from "react-router-dom";
import { SideSheet } from "@douyinfe/semi-ui";
import { IconMenu } from "@douyinfe/semi-icons";
import { socials } from "../data/socials";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="py-5 px-16 sm:px-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center justify-between w-full">
      {/* Brand Identity */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tighter text-slate-900">
            TruQalis<span className="text-emerald-600">Studio</span>
          </span>
        </Link>

          {/* Desktop Navigation - Pillars */}
          <div className="md:hidden flex gap-8 items-center">
            {[
              { label: "ERD Modeler", path: "/editor", icon: "bi-diagram-3" },
              { label: "API Designer", path: "/designer", icon: "bi-code-square" },
              { label: "DOC Builder", path: "/builder", icon: "bi-file-earmark-text" }
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="group flex items-center gap-2 text-[13px] font-bold text-zinc-500 hover:text-indigo-600 transition-all duration-300 uppercase tracking-wider"
              >
                <i className={`${item.icon} text-zinc-400 group-hover:text-indigo-600 transition-colors`} />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900"
        >
          <IconMenu size="large" />
        </button>
      </div>

      <SideSheet
        title={
          <div className="text-xl font-black tracking-tighter text-zinc-900">
            TruQalis<span className="text-indigo-600">Studio</span>
          </div>
        }
        visible={openMenu}
        onCancel={() => setOpenMenu(false)}
        width={window.innerWidth}
      >
        <div className="flex flex-col h-full bg-white">
          <div className="p-4 space-y-2">
            {/* <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Architectural Tools</p> */}
            {[
              { label: "ERD Modeler", path: "/ERD-editor", icon: "bi-diagram-3" },
              { label: "API Designer", path: "/API-designer", icon: "bi-code-square" },
              { label: "DOC Builder", path: "/DOC-builder", icon: "bi-file-earmark-text" }
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="flex items-center gap-4 p-4 text-zinc-900 font-bold border border-transparent active:bg-indigo-50 active:border-indigo-100 rounded-xl transition-all"
                onClick={() => setOpenMenu(false)}
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500">
                  <i className={`${item.icon} text-lg`} />
                </div>
                {item.label}
              </Link>
            ))}
          </div>

        </div>
      </SideSheet>
    </>
  );
}