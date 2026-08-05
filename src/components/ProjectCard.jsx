import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const ProjectCard = ({ project, index }) => {
  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col gap-4 p-6 sm:p-7 rounded-xl bg-ink-800/40 backdrop-blur-sm border border-line shadow-panel hover:border-accent/50 hover:bg-ink-800/60 duration-300 h-full"
    >
      <Wrapper {...wrapperProps} className="flex flex-col gap-4 h-full">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-accent text-sm">0{index + 1}</span>
          {project.href && (
            <i className="fa-solid fa-arrow-up-right-from-square text-mist-300 group-hover:text-accent duration-200 text-sm mt-1"></i>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg sm:text-xl font-semibold text-mist-100 group-hover:text-accent duration-200">
            {project.name}
          </h3>
          <p className="font-mono text-xs text-mist-300">{project.linkLabel}</p>
        </div>

        <p className="text-sm text-mist-300 leading-relaxed">{project.description}</p>

        {project.highlight && (
          <p className="text-sm text-mist-200 border-l-2 border-accent/60 pl-3 italic">
            {project.highlight}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-xs text-mist-300">
              {tech}
            </span>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default ProjectCard;
