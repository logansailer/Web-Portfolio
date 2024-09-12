const Header = ({ y }) => {
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
  ];
  return (
    <header
      className={
        "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
          ? "py-4 bg-slate-950 border-violet-950"
          : "py-6 bg-transparent border-transparent")
      }
    >
      <h1 className="font-medium">
        <b className="font-bold poppins">Logan</b> Sailer
      </h1>
      <div className="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {tabs.map((tab) => (
          <a href={tab.link} className="duration-200 hover:text-violet-400">
            <p>{tab.name}</p>
          </a>
        ))}
      </div>
      <a
        href="https://www.linkedin.com/in/logan-sailer/"
        target="_blank"
        className="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
      >
        <div className="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
        <h4 className="relative z-9">Get in Touch</h4>
      </a>
    </header>
  );
};

export default Header;
