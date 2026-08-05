const SectionHeading = ({ index, title }) => (
  <div className="flex items-center gap-4 mb-8 sm:mb-10">
    <h2 className="flex items-baseline gap-3 whitespace-nowrap text-2xl sm:text-3xl font-bold text-mist-100">
      <span className="font-mono text-accent text-lg sm:text-xl">0{index}.</span>
      {title}
    </h2>
    <span className="h-px flex-1 bg-line"></span>
  </div>
);

export default SectionHeading;
