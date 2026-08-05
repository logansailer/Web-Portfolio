import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="top"
      className="flex flex-col justify-center gap-8 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:min-h-screen lg:py-24 scroll-mt-16 lg:scroll-mt-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 max-w-3xl"
      >
        <motion.p
          variants={item}
          className="font-mono text-mist-300 text-sm tracking-widest"
        >
          Full-stack software engineer
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-mist-100"
        >
          I'm focused on building software that {""}
          <span className="italic font-serif text-accent">
            people actually use.
          </span>{" "}
      
        </motion.h1>
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-mist-300 max-w-2xl leading-relaxed"
        >
          I&apos;ve shipped features for millions of e-commerce customers at
          URBN, implemented an AI-powered shopping experience with the Gemini
          API, built a unix shell, and designed relational databases from
          scratch. I like owning problems end-to-end, and I&apos;m just as
          comfortable explaining the solution as I am building it.
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="rounded-md border border-accent/50 bg-accent/10 backdrop-blur-sm px-6 py-3 font-mono text-sm text-mist-100 duration-300 hover:border-accent hover:bg-accent/20"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-6 py-3 font-mono text-sm text-mist-100 duration-300 hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
