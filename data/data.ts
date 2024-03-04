interface skillsType {
  id: number;
  name: string;
  icon: string;
}

interface projectsDataType {
  id: string;
  name: string;
  description: string;
  stack: string;
  link: string;
  github: string;
}

export const projectsData: projectsDataType[] = [
  {
    id: "1",
    name: "Portfolio Website",
    description: "This is the website you are currently viewing",
    stack: "Reactjs + Gsap ",
    link: "/",
    github: "",
  },
  {
    id: "2",
    name: "Meta bnb",
    description:
      "A task assigned to me at hngi9 to implement a website that was designed in figma",
    stack: "Reactjs + Tailwindcss + Aos",
    link: "",
    github: "https://github.com/samueljr-web/meta-bnb",
  },
  {
    id: "3",
    name: "Countdown Timer",
    description:
      "A webapp that allows users to create countdowns for thier events fast, easy and quick",
    stack: "Reactjs + Tailwindcss + Nodejs + Expressjs",
    link: "https://countdown-app-chi.vercel.app/",
    github: "https://github.com/samueljr-web",
  },
  {
    id: "11",
    name: "Cert go",
    description:
      "A webapp that allows users create, share and download amazing single or bulk certificates within split seconds and in any format of your choice",
    link: "certgo.app",
    stack: "Reactjs, Mongodb, Nodejs, Express Js",
    github: "https://github.com/samueljr-web",
  },

  {
    id: "4",
    name: "UTY - Landing page",
    description: "I created a landing page for a delivery service",
    stack: "Javacript + Css",
    link: "https://uty.netlify.app/#",
    github: "https://github.com/samueljr-web",
  },
  {
    id: "5",
    name: "F.D.M.A",
    description: " This is a school website and my fisrt next.js project.",
    stack: "Nextjs + Tailwindcss + AOS",
    link: "https://fdma-website.vercel.app",
    github: "",
  },
  {
    id: "6",
    name: "Food City ",
    description: "A restaurant website",
    stack: "Reactjs + Css",
    link: "https://restaurant-website-silk.vercel.app",
    github: "",
  },

  {
    id: "7",
    name: "Twitter Clone",
    description:
      " This was my first Reactjs project/challenge i hopped on, i cloned twitter.",
    stack: "Reactjs + Sass",
    link: "https://react-twitterclone.netlify.app/",
    github: "",
  },
  {
    id: "8",
    name: "Todo App",
    description: "A todo app..",
    stack: "Javacript + Css",
    link: "https://youthful-lumiere-d7d69b.netlify.app/",
    github: "",
  },

  {
    id: "9",
    name: "Personal Website v1",
    description: "This was my former personal/portfolio website.",
    stack: "Reactjs + Css",
    link: "https://devsamuel.vercel.app/",
    github: "",
  },

  {
    id: "10",
    name: "CV",
    description: "A cv desgined with css",
    stack: "Reactjs + Css",
    link: "https://sh-cv.netlify.app",
    github: "https://github.com/samueljr-web",
  },
];

export const skillsData: skillsType[] = [
  {
    id: 0,
    name: "Reactjs",
    icon: "/assets/skillsicon/reactjs.svg",
  },
  {
    id: 1,
    name: "Nodejs",
    icon: "/assets/skillsicon/node.svg",
  },
  {
    id: 2,
    name: "Gsap",
    icon: "/assets/skillsicon/gsap.svg",
  },
  {
    id: 3,
    name: "Figma",
    icon: "/assets/skillsicon/figma.svg",
  },
  {
    id: 4,
    name: "Tailwindcss",
    icon: "/assets/skillsicon/tailwindcss.svg",
  },
  {
    id: 5,
    name: "Express",
    icon: "/assets/skillsicon/express.svg",
  },
  {
    id: 6,
    name: "Git",
    icon: "/assets/skillsicon/git.svg",
  },
  {
    id: 7,
    name: "Scss",
    icon: "/assets/skillsicon/scss.svg",
  },
  {
    id: 8,
    name: "Nextjs",
    icon: "/assets/skillsicon/nextjs.svg",
  },
  {
    id: 9,
    name: "Javascript",
    icon: "/assets/skillsicon/javascript.svg",
  },
  {
    id: 10,
    name: "Typescript",
    icon: "/assets/skillsicon/typescript.svg",
  },
  {
    id: 11,
    name: "MongoDb",
    icon: "/assets/skillsicon/mongodb.svg",
  },
];
