import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { EDUCATION, SKILLS, LANGUAGES } from "../../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-16 lg:scroll-mt-6">
      <SectionHeading index={1} title="About Me" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12"
      >
        <div className="lg:col-span-3 flex flex-col gap-5 text-mist-300 leading-relaxed">
          <p>
            I&apos;m a full-stack engineer with a somewhat non-traditional path: I earned a
            biology degree, spent a year teaching in Japan through the JET Program, and then
            went back to school to study computer science &mdash; graduating{" "}
            <span className="text-mist-100">Summa Cum Laude with a 4.0 GPA</span>. That mix
            left me with a habit of explaining hard things simply — which comes in handy both
            when writing code and when reviewing it with a team.
          </p>
          <p>
            Most recently, I worked as a{" "}
            <span className="text-mist-100">Web Software Engineering Intern at URBN</span>,
            shipping features and fixing bugs across revenue-critical Vue/TypeScript
            e-commerce apps used by millions of customers, and building an internal visual
            debugging tool now used across engineering, design, and QA. I also placed 5th out
            of 164 teams in a company-wide hackathon building an AI-powered checkout
            experience with the Gemini API.
          </p>
          <p>
            Outside of that, I tutor computer science students in algorithms, data
            structures, and web development, and I build side projects to keep learning new
            stacks. I&apos;m conversational in Japanese, and I&apos;m currently looking for a
            full-time software engineering role where I can keep building things people
            actually use.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.school}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-l-2 border-line pl-4 py-1"
              >
                <div>
                  <p className="text-mist-100 font-medium">{edu.school}</p>
                  <p className="text-sm">
                    {edu.degree} &middot; {edu.detail}
                  </p>
                </div>
                <p className="font-mono text-xs text-mist-300 whitespace-nowrap">{edu.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-8">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-mist-300 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-md bg-ink-800/50 backdrop-blur-sm border border-line text-mist-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-mist-300 mb-3">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="text-xs px-3 py-1.5 rounded-md bg-ink-800/50 backdrop-blur-sm border border-line text-mist-200"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
