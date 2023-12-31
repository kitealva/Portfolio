import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    python,
    ddart,
    devmountain,
    me,
    walker,
    wbgames,
    portfolio,
    ash,
    cody,
    compass,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React",
      icon: mobile,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: python,
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "DevMountain Student Developer",
      icon: devmountain,
      iconBg: "#D39B39",
      date: "August 2022 - October 2022",
      points: [
        "My developer journey started at a Coding Bootcamp called DevMountain. I spent 6 months learning the in's and out's of Development. My time was spent learning a wide range from git, file management, best practices, different languages, and project management. During my camp I spent day to day creating small scale projects to help solidfy my knowledge to help create a end term project front to back to present to my cohort. It was a great experience that helped solidfy my knowledge and skills in the coding space.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: me,
      iconBg: "#D39B39",
      date: "December 2022 - Present",
      points: [
        "I am currently an independent developer working via contract/project based work. I specialize in Portfolios, E-commerce, and any other web based development. If you are looking for a flexible, skilled, and creative developer I am your guy! To further any inquiries refer to the Contact form below!",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Brady is a great guy with a strong work ethic. Throughout my time knowing him we’ve worked on a few applications together and his communication skills were great. Brady is definitely someone you want on your team.",
      name: "Walker",
      designation: "Developer",
      company: " at Tidal Athletics",
      icon: walker,
    },
    {
      testimonial:
        "Brady is an exceptional coder with a deep passion for programming. I have had the privilege of knowing Brady for 7 years and can attest to their outstanding skills and dedication to their craft.",
      name: "Ashton",
      designation: "Graphic Designer",
      company: "",
      icon: ash,
    },
    {
      testimonial:
        "Brady is an amazing developer and an even better person. He has a very rigorous work ethic and when he sets hit mind to something there isn't much stopping him. He has a passion or learning and bettering himself.",
      name: "Cody",
      designation: "Developer",
      company: "",
      icon: cody,
    },
  ];
  
  const projects = [
    {
      name: "DD Art",
      description:
        "DD Art is a E-commerce website made to list and sell my brother Deven's art. This was my capstone project for my graduation at DevMountain!",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sql-alchemy",
          color: "green-text-gradient",
        },
        {
          name: "jinja2",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "orange-text-gradient",
        },
      ],
      image: ddart,
      source_code_link: "https://github.com/kitealva/DD-Art",
    },
    {
      name: "WB Games",
      description:
        "WB Games is a stat tracker for FPS turned Chat based! This is a passion project with my friend Walker where we wanted to make a in house chat application for us and our friends.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jinja2",
          color: "green-text-gradient",
        },
        {
          name: "boostrap-css",
          color: "pink-text-gradient",
        },
        {
          name: "sql",
          color: "orange-text-gradient",
        },
      ],
      image: wbgames,
      source_code_link: "https://github.com/walkerhebert/WB-games",
    },
    {
      name: "Portfolio",
      description:
        "This is my recent project! This very portfolio! This was a project to re strengthen my skills in Javascript as well as learn react, tailwind-css and vite!",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/kitealva/Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };