import Step from "./Step";

let steps = [
  {
    name: "Client Database Management Site",
    icon: "fa-solid fa-globe",
    href: "https://github.com/logansailer/Client-Database-Management-Site",
    content:
      "A full-stack web application for managing train schedules, built with MySQL and Express.js on the backend and JavaScript, HTML, and Handlebars on the frontend. The app supports full CRUD functionality (Create, Read, Update, Delete) and provides a responsive interface for interacting with client data.",
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
    name: "my experience",
    description:
      "I’m a computer science student passionate about building applications that are practical and intuitive. Most recently, I developed a Client Database Management Site that utilizes MySQL and Express.js for backend data handling and a Handlebars frontend for dynamic content rendering. In this project, I designed normalized database schemas, implemented RESTful APIs, and optimized SQL queries for performance and safety. Alongside my development work, I teach computer science, guiding students through programming fundamentals and object-oriented design using Python and JavaScript. This has strengthened my communication skills and deepened my understanding of how to explain complex technical concepts clearly and effectively.",  
  },
  {
    name: "my work",
    description:
      "As an engineer, I focus on design and efficiency. My E-Commerce Web Application exemplifies this: it’s a responsive, full-stack platform built with React, Node.js, and Express.js, featuring Stripe integration for secure payments. It leverages React to create reusable, performant  components. I also built Chacha, a caffeine tracking app designed with personalized dashboards and visual analytics using React, Node, and Firebase. Across these projects, I’ve honed my ability to design clean interfaces, write reusable code, and create scalable platforms. My stack includes JavaScript, TypeScript, Python, and SQL with frameworks like React, Next, Django, and Express. Whether it’s crafting a UI, designing an API, or structuring a database, I’m always programming with form and function in mind.",
  },
  {
    name: "my focus",
    description:
      "Right now, I’m expanding my expertise in computer science while continuing to build. I’m pursuing a Bachelor’s in Computer Science at Oregon State University, maintaining a 4.0 GPA and completing coursework in data structures, algorithms, computer architecture, database development, and more. My current focus area is full stack engineering: building performant backends and databases to work with elegant and modern frontends. Looking forward, I’m excited to contribute to projects, explore new technologies, and continue to learn through a company that encourages collaboration and growth.",  
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
