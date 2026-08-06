import { motion } from "framer-motion";
import { PROFILE, SOCIAL_LINKS } from "../../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 flex flex-col items-center text-center gap-6 scroll-mt-16 lg:scroll-mt-6"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="flex flex-col items-center gap-6 max-w-xl"
      >
        <p className="font-mono text-accent text-sm tracking-widest">
          04. What&apos;s next?
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-mist-100">
          Let&apos;s build something worth shipping.
        </h2>
        <p className="text-mist-300 leading-relaxed">
          I&apos;m actively looking for full-time software engineering roles.
          Feel free to reach out if you have any questions!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-md border border-accent/50 bg-accent/10 backdrop-blur-sm px-8 py-3.5 font-mono text-sm text-mist-100 duration-300 hover:border-accent hover:bg-accent/20"
          >
            Say hello
          </a>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.filter((social) => social.name !== "Email").map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="w-[3.25rem] h-[3.25rem] grid place-items-center rounded-md border border-line bg-ink-800/40 backdrop-blur-sm text-mist-300 text-lg duration-300 hover:border-accent hover:text-accent hover:bg-accent/10"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const SiteFooter = () => {
  return (
    <footer className="py-10 flex items-center justify-end border-t border-line text-xs font-mono text-mist-300">
      <p>Built with React &amp; Tailwind CSS</p>
    </footer>
  );
};

export default Contact;
