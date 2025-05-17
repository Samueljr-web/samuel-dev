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
  isPrivate?: boolean;
}

export const projectsData: projectsDataType[] = [
  {
    id: "1",
    name: "Tunu.io",
    description:
      "A digital wellness platform providing personalized recovery plans for individuals facing substance use and behavioral addictions. Features include self-assessments, virtual therapy, medication management, and access to rehabilitation services, all designed to offer accessible and judgment-free care.",
    stack: ["Next", "forms", "Tailwind"],
    link: "https://tunu.io",
    github: "https://github.com/samueljr-web/",
    isPrivate: true,
  },
  {
    id: "2",
    name: "Certgo",
    description:
      "A webapp that allows users create, share and download amazing single or bulk certificates within split seconds and in any format of your choice",
    link: "https://certgo.app",
    stack: ["React", "Mongodb", "Node"],
    github: "https://github.com/samueljr-web",
    isPrivate: true,
  },
  {
    id: "3",
    name: "QRConnect",
    description:
      "QR Connect is a smart platform designed to modernize business operations through QR technology. It empowers businesses to deliver instant, contactless access to product details, and support, all through a simple scan—enhancing customer experience and operational efficiency.",
    link: "https://qrconect.com",
    stack: ["React", "next", "materialui", "redux"],
    github: "https://github.com/samueljr-web",
    isPrivate: true,
  },

  {
    id: "4",
    name: "Lets countdown",
    description:
      "A webapp that allows users to create countdowns for thier events fast, easy and quick",
    stack: ["React", "Tailwind", "Node"],
    link: "https://lets-countdown.vercel.app/",
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
