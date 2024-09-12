const Step = ({ step }) => {
  return (
    <a
      href={step.href}
      target="_blank"
      className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"
    >
      <div className="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xy -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
        <i className={step.icon}></i>
      </div>
      <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">
        {step.name}
      </h3>
      <p>{step.content}</p>
      <div className="flex-1 flex justify-between gap-4 items-center">
        <div className="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:w-full after:bg-white after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
          <p className="relative z-4">Go to &#8594; </p>
        </div>
      </div>
    </a>
  );
};

export default Step;
