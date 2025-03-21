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
    name: "a developer",
    description:
      "I initially pursued premed due to external expectations, but I took charge of my career and discovered my true passion for software development. Through self-study, I became proficient in full-stack development, built a fully functional e-commerce platform, and mastered technologies like React, Node.js, and Firebase. Now, I'm further solidifying my skills through a second degree in Computer Science, continuously pushing myself to grow and improve.",
  },
  {
    name: "a biologist",
    description:
      "My biology degree trained me to analyze complex systems, interpret data, and think critically—skills that directly apply to software development. Working in a hospital exposed me to high-pressure problem-solving and interdisciplinary collaboration. With a scientific mindset, I'm used to forming hypotheses, testing solutions, and refining results, which helps me approach debugging and optimizing code in a structured way.",
  },
  {
    name: "a bridge",
    description:
      "With a background in both science and software, I bring a unique interdisciplinary perspective. My knowledge of biology and healthcare makes me well-suited for biotech, healthtech, and AI-driven research. I understand both the scientific process and the software development lifecycle, allowing me to bridge the gap between researchers and engineers. Whether working with data, algorithms, or healthcare applications, I'm excited about building technology that solves real-world scientific problems.",
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
            My <span className="text-violet-400">tech stack</span> includes
            JavaScript, TypeScript, Python, C, and SQL and I have experience with frameworks and libraries such as React, Node, Express, Next, Django, and Flask.{" "}
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
            Please take a look at
          </h6>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            <span className="poppins text-violet-400">My Projects</span>
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
