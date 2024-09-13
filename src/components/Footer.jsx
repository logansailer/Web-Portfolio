const Footer = () => {
  return (
    <div
      className="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col 
    gap-4 sm:gap-8 justify-center items-center "
    >
      <p className="px-4 py-2 bg-white text-slate-950 font-medium">
        Connect with me &darr;
      </p>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p>
          <b className="pr-2">Email</b> logansailer0633@gmail.com
        </p>
        <p>
          <b className="pr-2">Github</b>
          <a
            className="text-violet-400"
            target="_blank"
            href="https://github.com/logansailer"
          >
            logansailer
            <sup>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs scale-75"></i>
            </sup>
          </a>
        </p>
        <p>
          <b className="pr-2">LinkedIn</b>
          <a
            className="text-violet-400"
            target="_blank"
            href="https://www.linkedin.com/in/logan-sailer/"
          >
            logan-sailer
            <sup>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs scale-75"></i>
            </sup>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
