import ecommerce from "../assets/projects/ecommerce.png";
import notion from "../assets/projects/notion.png";
import byte from "../assets/projects/byte.png";

export const ProjectList = [
  {
    id: 1,
    name: "Bearish Bulls",
    description:
      "Created a real-time mock trading website in Django, Jinja and Flask, where users can buy and sell stocks, check the current price of the stocks, check their transactions history and net profit/loss.– Used API key to fetch related data, and SQL database in the backend to keep track of the portfolio and users.– Enabled the login and signup functionality from scratch and added multiple edge cases for site reliabilit",
    img: byte,
    //max 6 tech stack
    tech: ["Flask", "Tailwind CSS", "SQL", "Django"],
    source: "https://github.com/code50/91630225/tree/main/finance",
    demo: null,
  },
  {
    id: 2,
    name: " Image Editor",
    description:
      "Developed an image editor and enhancer using ReactJs and Vite for the frontend and NodeJs for the backend.– Added basic image editing options like crop, cut, rotate, resize, text overlay and some colour filters to the image.– Streamlined setup for quick download, offering image type conversion options for user preference.– Utilized AWS and Google tags for AI-driven image tagging, with up to 90% accuracy",
    img: ecommerce,
    //max 6 tech stack
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
    ],
    source: "https://github.com/garvit-001/Image-Editor",
    demo: "https://image-editor-weld.vercel.app/",
  },
  {
    id: 3,
    name: "Kontest App",
    description:
      "Utility website for students, in ReactJs and Vite displaying the schedule of upcoming programming contests.– Added notes saving, password- generator and QRcode generator feature to increase usability,– Used Firebase as a service for the backend, the cloud and authorization, deployed it on Verce",
    img: notion,
    //max 6 tech stack
    tech: ["React.js", "Tailwind CSS"],
    source: "https://github.com/garvit-001/kontestapp",
    demo: "https://kontestapp.vercel.app/",
  },
];
