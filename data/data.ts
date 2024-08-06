interface skillsType {
  id: number;
  name: string;
  icon: string;
}

interface projectsDataType {
  id: string;
  name: string;
  description: string;
  stack: string[];
  link: string;
  github: string;
}

export const projectsData: projectsDataType[] = [
  {
    id: "1",
    name: "Cert go",
    description:
      "A webapp that allows users create, share and download amazing single or bulk certificates within split seconds and in any format of your choice",
    link: "https://certgo.app",
    stack: ["Reactjs", "Mongodb", "Nodejs", "Expressjs"],
    github: "https://github.com/samueljr-web",
  },

  {
    id: "2",
    name: "Meta bnb",
    description:
      "A task assigned to me at hngi9 to implement a website that was designed in figma",
    stack: ["Reactjs", "Tailwindcss", "Aos"],
    link: "/",
    github: "https://github.com/samueljr-web/meta-bnb",
  },
  {
    id: "3",
    name: "Lets countdown",
    description:
      "A webapp that allows users to create countdowns for thier events fast, easy and quick",
    stack: ["Reactjs", "Tailwindcss", "Nodejs", "Expressjs"],
    link: "https://countdown-app-chi.vercel.app/",
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
