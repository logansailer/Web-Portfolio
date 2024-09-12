import Step from "./Step";

let steps = [
  {
    name: "Battleship",
    icon: "fa-solid fa-ship",
    href: "https://logansailer.github.io/Battleship/",
    content:
      "Batlleship is a web-based version of the hit game of the same name. The app was created to practice test driven development and object oriented programming",
  },
  {
    name: "Sunny",
    icon: "fa-solid fa-sun",
    href: "https://logansailer.github.io/Weather-App/",
    content: "",
  },
  {
    name: "Resturant Mock-up",
    icon: "fa-solid fa-utensils",
    href: "https://logansailer.github.io/Restaurant-Page/",
    content: "",
  },
];

let benefits = [
  {
    name: "a self taught developer, continuously learning",
    description:
      "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
  },
  {
    name: "an adaptable and hard worker",
    description:
      "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
  },
  {
    name: "the one who can it done",
    description:
      "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
  },
];
const Main = ({}) => {
  return (
    <main className="flex flex-col flex-1 p-4">
      <section
        id="intropage"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
      >
        <div
          className="flex flex-col lg:justify-center text-center 
        lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
          <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
            Hi I'm <span className="poppins text-violet-400">Logan</span> Sailer
            <br />A Full Stack{" "}
            <span className="poppins text-violet-400">Developer</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            My <span className="text-violet-400">favorite tech</span> includes
            JavaScript (especially React.js), TailwindCSS, Node.js, Python, and
            SQL!
          </p>
          <a
            href="https://www.linkedin.com/in/logan-sailer/"
            target="_blank"
            className="poppins blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg 
            md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-white
             text-slate-950 cursor-pointer"
          >
            <div
              className="absolute top-0 right-full w-full h-full bg-violet-400 
            opacity-20 group-hover:translate-x-full z-0 duration-200"
            ></div>
            <h4 className="relative z-9">Get in Touch &rarr;</h4>
          </a>
        </div>
        <div className="relative shadow-2xl grid place-items-center">
          <img
            src={"src/assets/profile.png"}
            alt="Profile image"
            className="object-cover z-[2] max-h-[70vh]"
          ></img>
        </div>
      </section>
      <section id="projects" className="py-20 lg:py-32 flex flex-col gap-24">
        <div className="flex flex-col gap-2 text-center">
          <h6 className="text-lg sm:text-xl md:text-2xl">
            A few of my past works
          </h6>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Please take a <span className="poppins text-violet-400">look</span>
          </h3>
        </div>
        <a
          href=""
          target="_blank"
          className="mx-auto px-4 py-2 rounded-md border border-solid border-white 
          flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-voilet-70 duration-200"
        >
          <i className="fa-regular fa-circle-play"></i>
          <p>Watch Video</p>
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          <Step step={steps[0]} />
          <Step step={steps[1]} />
          <Step step={steps[2]} />
        </div>
      </section>
      <section
        id="about"
        className="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
      >
        <div
          className="flex flex-col gap-2 text-center relative before:absolute 
          before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5
         after:bg-violet-700 py-4"
        >
          <h6 className="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
          <h3 className="font-semi-bold text-3xl sm:-4xl md:text-5xl">
            A bit <span className="poppins text-violet-400">about</span> me
          </h3>
        </div>
        <p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
          I am . . .
        </p>
        <div className="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
          {benefits.map((benefit, index = 0) => (
            <div className="flex gap-6 sm:gap-8">
              <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                0{index + 1}
              </p>
              <div className="flex flex-col gap-6 sm:gap-8">
                <h3 className="text-2xl smLtext-3xl md:text-5xl">
                  {benefit.name}
                </h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
