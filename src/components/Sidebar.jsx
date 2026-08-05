import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROFILE, NAV_LINKS, SOCIAL_LINKS } from "../data/portfolio";

const SocialRow = ({ className = "" }) => (
  <div className={`flex items-center gap-5 ${className}`}>
    {SOCIAL_LINKS.map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noreferrer"
        aria-label={social.name}
        className="text-mist-300 hover:text-accent hover:-translate-y-0.5 duration-200 text-lg"
      >
        <i className={social.icon}></i>
      </a>
    ))}
  </div>
);

const NavList = ({ activeId, onNavigate, variant = "desktop" }) => (
  <ul className={variant === "desktop" ? "flex flex-col gap-1" : "flex flex-col items-center gap-8"}>
    {NAV_LINKS.map((link, index) => {
      const id = link.href.replace("#", "");
      const isActive = activeId === id;
      return (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={onNavigate}
            className={
              variant === "desktop"
                ? `group flex items-center gap-3 py-2.5 ${
                    isActive ? "text-mist-100" : "text-mist-300 hover:text-mist-100"
                  }`
                : `font-mono text-2xl ${isActive ? "text-accent" : "text-mist-100"}`
            }
          >
            {variant === "desktop" && (
              <span
                className={`h-px duration-300 ${
                  isActive ? "w-10 bg-mist-100" : "w-4 bg-mist-500 group-hover:w-8 group-hover:bg-mist-200"
                }`}
              ></span>
            )}
            <span className={variant === "desktop" ? "font-mono text-xs tracking-widest uppercase" : ""}>
              {variant === "desktop" && (
                <span className="text-mist-500 mr-1">0{index + 1}.</span>
              )}
              {link.name}
            </span>
          </a>
        </li>
      );
    })}
  </ul>
);

const Sidebar = ({ activeId }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 h-16 flex items-center justify-between px-6 bg-ink-950/80 backdrop-blur-md border-b border-line">
        <a href="#top" className="font-mono text-sm tracking-tight text-mist-100">
          <span className="text-accent">~/</span>
          {PROFILE.firstName.toLowerCase()}-{PROFILE.lastName.toLowerCase()}
        </a>
        <button
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-mist-100 text-xl w-10 h-10 grid place-items-center"
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-30 bg-ink-950/90 backdrop-blur-lg flex flex-col items-center justify-center gap-10"
          >
            <NavList activeId={activeId} variant="mobile" onNavigate={() => setMenuOpen(false)} />
            <SocialRow className="mt-4" />
          </motion.div>
        )}
      </AnimatePresence>

      <aside className="hidden lg:flex lg:flex-col lg:justify-between fixed top-0 left-0 h-screen w-[400px] xl:w-[460px] px-14 xl:px-16 py-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <a href="#top" className="w-fit">
              <h1 className="text-4xl font-extrabold tracking-tight text-mist-100">
                {PROFILE.firstName}
                <br />
                {PROFILE.lastName}
              </h1>
            </a>
            <p className="text-mist-300 text-sm leading-relaxed max-w-[300px]">
              {PROFILE.blurb}
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-fit rounded-full border border-line bg-ink-800/40 backdrop-blur-sm pl-2.5 pr-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal"></span>
            </span>
            <span className="font-mono text-xs text-mist-200">{PROFILE.status}</span>
          </div>
        </div>

        <nav>
          <NavList activeId={activeId} />
        </nav>

        <SocialRow />
      </aside>
    </>
  );
};

export default Sidebar;
