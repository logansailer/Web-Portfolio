export const PROFILE = {
  name: "Logan Sailer",
  firstName: "Logan",
  lastName: "Sailer",
  role: "Full Stack Software Engineer",
  location: "Philadelphia, PA",
  email: "logansailer0633@gmail.com",
  status: "Open to new-grad software roles",
  blurb:
    "Full-stack engineer who likes owning problems end to end — design, code, and ship.",
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/logansailer",
    icon: "fa-brands fa-github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/logan-sailer/",
    icon: "fa-brands fa-linkedin",
  },
  {
    name: "Email",
    href: "mailto:logansailer0633@gmail.com",
    icon: "fa-solid fa-envelope",
  },
];

export const EDUCATION = [
  {
    school: "Oregon State University",
    degree: "B.S. in Computer Science",
    detail: "Graduated Summa Cum Laude · GPA 4.0",
    date: "Dec 2024 – Mar 2026",
  },
  {
    school: "Franklin & Marshall College",
    degree: "B.A. in Biology",
    detail: "Graduated Cum Laude · GPA 3.7",
    date: "Aug 2019 – May 2023",
  },
];

export const EXPERIENCE = [
  {
    company: "URBN",
    companyFull: "Urban Outfitters, Anthropologie, Free People, Nuuly",
    href: "https://www.urbn.com/our-brands",
    role: "Web Software Engineering Intern",
    location: "Philadelphia, Pennsylvania",
    date: "June 2026 – August 2026",
    bullets: [
      "Exceeded the team's expected sprint velocity by contributing 67% more story points than the target on average, while proactively picking up additional backlog tickets and independently delivering a highly requested internal feature.",
      "Collaborated across teams to develop new production features, resolve bugs, and implement UI/UX improvements across revenue-critical Vue/TypeScript e-commerce applications used by millions of customers.",
    ],
    tags: ["Vue", "TypeScript", "E-Commerce"],
  },
  {
    company: "Oregon State University",
    companyFull: "Oregon State University",
    href: "https://oregonstate.edu/",
    role: "Computer Science Tutor",
    location: "Remote",
    date: "January 2025 – March 2026",
    bullets: [
      "Tutored students in CS fundamentals, including algorithms, data structures, and web development.",
    ],
    tags: [
      "Algorithms",
      "Data Structures",
      "Full-Stack Development",
      "Teaching",
    ],
  },
  {
    company: "JET Program",
    companyFull:
      "Japanese Ministry of Education, Culture, Sports, Science and Technology",
    href: "https://jetprogramme.org/",
    role: "Language Teacher",
    location: "Nara, Japan",
    date: "July 2023 – August 2024",
    bullets: [
      "Designed and delivered lessons while adapting technical concepts across language and cultural barriers.",
    ],
    tags: ["Communication", "Teaching"],
  },
];

export const PROJECTS = [
  {
    name: "Visual Debugging Tool",
    company: "URBN",
    href: "https://www.urbn.com/",
    linkLabel: "Built for URBN",
    stack: ["Vue", "TypeScript"],
    description:
      "An internal debug tool that maps on-screen elements in a live web app back to their CMS data, helping engineers, designers, and QA find and fix content issues faster and more accurately.",
    highlight:
      "Reduced engineering support overhead by making debugging accessible to non-engineering roles.",
  },
  {
    name: "Post Checkout Purchase",
    company: "URBN",
    href: "https://www.urbn.com/",
    linkLabel: "Built for URBN",
    stack: ["Vue", "TypeScript", "AI"],
    description:
      'An AI-enhanced post-checkout "Add to Order" experience integrating the Google Gemini API into an existing recommendation system to deliver curated, real-time suggestions.',
    highlight:
      "Earned 5th place among 164 participants, advancing to executive-round judging in a company-wide hackathon.",
  },
  {
    name: "E-Commerce Web Application",
    href: "https://github.com/logansailer/ecommerce-site",
    linkLabel: "View on GitHub",
    stack: ["React", "Node.js", "Express", "Firebase", "Stripe"],
    description:
      "A full-stack e-commerce platform with a microservices-based cart and authentication system, plus RESTful APIs for efficient client–server communication.",
    highlight: "Built for scalability and maintainability from the ground up.",
  },
  {
    name: "Mid-Valley Mental Health",
    href: null,
    linkLabel: "Sponsored project · repo private",
    stack: ["React", "Node.js", "Express", "SQL"],
    description:
      "A full-stack mental health provider directory built with a normalized relational database, optimized SQL queries, and RESTful CRUD endpoints.",
    highlight:
      "Refactored and extended incomplete features left by prior developers to improve usability and scalability.",
  },
  {
    name: "Chacha",
    href: "https://chacha-tracking.netlify.app/",
    linkLabel: "View live site",
    stack: ["React", "Firebase"],
    description:
      "A tea and caffeine tracking app blending caffeine-intake research from my undergrad studies with a love for tea, featuring Firebase auth and database management.",
    highlight: "Actively maintained side project.",
  },
  {
    name: "Small Shell",
    href: "https://github.com/logansailer/smallShell",
    linkLabel: "View on GitHub",
    stack: ["C", "Linux"],
    description:
      "A Unix-like shell written in C supporting command execution, process control, and input parsing using low-level system calls.",
    highlight:
      "Implemented I/O redirection, signal handling, and foreground/background process management from scratch.",
  },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "HTML/CSS",
      "C",
      "MASM Assembly",
      "Ruby",
      "R",
    ],
  },
  {
    category: "Frameworks / Libraries",
    items: [
      "React",
      "Vue",
      "Node",
      "Next.js",
      "Redux",
      "Pinia",
      "Express",
      "Django",
      "Flask",
      "Bootstrap",
      "Tailwind",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "Firebase", "MongoDB"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub Actions",
      "Jira",
      "Postman",
      "Figma",
      "Playwright",
      "Vitest",
      "Pytest",
      "AI-Assisted Development (Claude, Cursor, Gemini)",
    ],
  },
];

export const LANGUAGES = ["Conversational Japanese"];
