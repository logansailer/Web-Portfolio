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
        <a
          href={`mailto:${PROFILE.email}`}
          className="rounded-md border border-accent/50 bg-accent/10 backdrop-blur-sm px-8 py-3.5 font-mono text-sm text-mist-100 duration-300 hover:border-accent hover:bg-accent/20 mt-2"
        >
          Say hello
        </a>
      </motion.div>
    </section>
  );
};

export const SiteFooter = () => {
  return (
    <footer className="py-10 flex flex-col sm:flex-row items-center sm:justify-end gap-4 border-t border-line text-xs font-mono text-mist-300">
      <div className="flex items-center gap-5 lg:hidden">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="text-mist-300 hover:text-accent duration-200 text-base"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
      <p>Built with React &amp; Tailwind CSS</p>
    </footer>
  );
};

export default Contact;
