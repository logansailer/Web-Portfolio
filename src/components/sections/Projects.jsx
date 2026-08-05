import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import { PROJECTS } from "../../data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 scroll-mt-16 lg:scroll-mt-6">
      <SectionHeading index={3} title="Projects" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </motion.div>

      <p className="text-sm text-mist-300 mt-10">
        Want to see more?{" "}
        <a
          href="https://github.com/logansailer"
          target="_blank"
          rel="noreferrer"
          className="text-accent hover:text-accent-light"
        >
          Check out the rest of my repos on GitHub
          <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1.5"></i>
        </a>
      </p>
    </section>
  );
};

export default Projects;
