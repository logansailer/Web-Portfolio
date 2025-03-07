import Step from "./Step";

let steps = [
  {
    name: ".world",
    icon: "fa-solid fa-globe",
    href: "https://github.com/logansailer/ecommerce-site/tree/main?tab=readme-ov-file",
    content:
      ".world is a responsive, full-stack e-commerce web application built with React, Node.js, and Express. It offers a seamless user experience for browsing and purchasing using Firebase for convenient user authentication and Stripe for secure transactions.",
  },
  {
    name: "Chacha",
    icon: "fa-solid fa-mug-hot",
    href: "https://chacha-tracking.netlify.app/",
    content:
      "Chacha is a tea and caffeine tracking app. The app was created to combine research done in my undergrad based around caffeine intake with my love for tea. Chacha is written using React.JS and features Firebase user authentication and database management.",
  },
  {
    name: "Sorting Visualizer",
    icon: "fa-solid fa-chart-simple",
    href: "https://sortlogansailer.netlify.app/",
    content:
      "This app showcases how different sorting algorithims function. Written in TypeScript with Next.js, the visualizer is fully responsive on both web and mobile.",
  },
];

let benefits = [
  {
    name: "a self taught developer",
    description:
      "As a biologist turned developer, my journey began with curiosity. As I dove into learning to code, I quickly fell in love with the creativity and endless possibilities that are at my fingertips as a developer. Starting off with Python and C, and advancing my knowledge to include JavaScript, React.JS, Node.JS, and more, I have created countless apps that solve real world problems and helped build a strong foundation if software development.",
  },
  {
    name: "continuously learning",
    description:
      'Growing up, I was always the "tech guy". That started out as being the one to fix the family wifi, but grew into installing emulators on the PC I built, and flashing custom ROMs on my android phone. The thrill of trying something new with tech, failing at first, and then finding a way to make it work has always tickled something in me and fueled my desire to keep learning more.',
  },
  {
    name: "an adaptable and hard worker",
    description:
      "Driven by a genuine passion for technology and design, I approach every project with dedication and perseverance. My journey as a self-taught developer is a testament to my commitment to my work. I thrive in pushing through challenges and learning new ways to solve problems in order to refine my skills and deliver the best results.",
  },
];

const Main = () => {
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
            Hi I&apos;m <span className="poppins text-violet-400">Logan</span>{" "}
            Sailer
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
            className="poppins mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg 
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
            src={"/profile.png"}
            alt="Profile image"
            className="object-cover z-[2] max-h-[70vh]"
          ></img>
        </div>
      </section>
      <section id="projects" className="py-20 lg:py-32 flex flex-col gap-24">
        <div className="flex flex-col gap-2 text-center">
          <h6 className="text-lg sm:text-xl md:text-2xl">
            A few of my past projects
          </h6>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Please take a <span className="poppins text-violet-400">look</span>
          </h3>
        </div>
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
            <div key={benefit.name} className="flex gap-6 sm:gap-8">
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
