import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { EXPERIENCE } from "../../data/portfolio";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const job = EXPERIENCE[activeIndex];

  return (
    <section id="experience" className="py-16 sm:py-24 scroll-mt-16 lg:scroll-mt-6">
      <SectionHeading index={2} title="Experience" />

      <div className="flex flex-col sm:flex-row">
        <div
          role="tablist"
          aria-label="Job experience"
          className="flex flex-wrap gap-2 sm:flex-col sm:flex-nowrap sm:gap-0 sm:border-l sm:border-line shrink-0"
        >
          {EXPERIENCE.map((item, index) => (
            <button
              key={item.company}
              role="tab"
              aria-selected={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`relative whitespace-nowrap text-left rounded-md border px-3 py-2 sm:rounded-none sm:border-0 sm:border-l-2 sm:-ml-px sm:px-5 sm:py-4 text-xs sm:text-sm font-mono duration-200 ${
                activeIndex === index
                  ? "text-accent border-accent/50 bg-accent/10 sm:bg-ink-800/60 sm:border-accent"
                  : "text-mist-300 border-line sm:border-transparent hover:bg-ink-800/40 hover:text-mist-100"
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>

        <div className="sm:pl-8 pt-4 sm:pt-0 flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-lg bg-ink-800/40 backdrop-blur-sm border border-line/60 shadow-panel p-6 sm:p-7"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-mist-100">
                {job.role}{" "}
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:text-accent-light"
                  >
                    @ {job.company}
                  </a>
                ) : (
                  <span className="text-accent">@ {job.company}</span>
                )}
              </h3>
              <p className="font-mono text-xs text-mist-300 mt-1">
                {job.date} &middot; {job.location}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-mist-300 leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0">
                      <i className="fa-solid fa-caret-right text-xs"></i>
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-md bg-ink-700/50 backdrop-blur-sm border border-line text-mist-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
