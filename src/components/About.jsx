import { useState, useTransition, useRef, Suspense } from "react";
import TabbedComponent from "./TabbedComponent";
import { Skills } from "../constants/Skills";
import { motion, useInView } from "framer-motion";
import Loading from "./Loading";
import about from "../assets/About.png"

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className=" sm:px-8 py-[80px] overflow-hidden" id="about">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex gap-4 items-center"
      >
        <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
          About Me
        </h3>
        <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
      </motion.div>
      <div className="py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            x: -100,
            scale: 0.8,
            filter: "blur(6px)",
          }}
          animate={
            inViewContent
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : { opacity: 1, x: -100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="flex-1 md:max-w-[40%] sm:mt-10 "
        >
          <Suspense fallback={<Loading />}>
            <img
              src={about}
              alt="meme"
              loading="lazy"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] "
            />
          </Suspense>
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={
            inViewContent
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="font-serif p-4 text-lg sm:text-xl sm:leading-7">
            I am a passionate MERN Stack Developer and a Problem Solver,
            dedicated to creating impactful codes that thrive on the internet.
            <br />
            I have experience working with C, C++, JavaScript, TypeScript, HTML,
            CSS, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Git.
            <br />I am a quick learner and I am always looking to expand my
            knowledge and skill set.
          </p>

          <div className="flex flex-row justify-start gap-6 pl-4">
            <TabbedComponent
              selectTab={() => selectTab("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabbedComponent>
            <TabbedComponent
              selectTab={() => selectTab("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabbedComponent>
            <TabbedComponent
              selectTab={() => selectTab("work")}
              active={tab === "work"}
            >
              {" "}
              Work Experience{" "}
            </TabbedComponent>
          </div>
          <div className="mt-8 pl-4 max-w-[100%] min-h-[140px] flex flex-wrap gap-x-10 gap-y-8">
            {tab === "skills" ? (
              Skills?.map((skill, i) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    key={i}
                    className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <img src={skill.img} alt={skill.description} />
                    <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-textWhite rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-1 opacity-0 mx-auto px-2 w-max">
                      {skill.description}
                    </span>
                  </motion.div>
                );
              })
            ) : tab === "education" ? (
              <ul className="list-disc pl-2">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">IIT BHU, Varanasi</h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p>
                        Bachelor of Technology in Chemical Engg & Technology
                      </p>
                      <p>2020-2024</p>
                      <p>Grade: 9.13</p>
                    </span>
                  </div>
                </motion.li>
              </ul>
            ) : (
              <ul className="list-disc pl-2 flex flex-col gap-4">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">
                    Software Developer {" "}
                    <span className="text-base font-[500]">- Accenture Japan</span>
                  </h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p>
                        Managed cloud platform for the app. Developed IAM roles, Optimized terraform code, maintained the IP address used by NewRelic
                      </p>
                    </span>
                  </div>
                  <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                    <span className="">December 2024 - Present</span>
                    <span className="">Tokyo (onsite)</span>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">
                    Full Stack Engineer Intern{" "}
                    <span className="text-base font-[500]">- ZintelliX</span>
                  </h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p>
                        Developing an AI-driven SaaS platform to facilitate
                        companies to find best price in the market and end to
                        end cutting-edge data analytics that empower
                        organizations to make informed, strategic decisions .
                      </p>
                    </span>
                  </div>
                  <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                    <span className="">April 2024 - September 2024</span>
                    <span className="">Remote</span>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">
                    SDE Intern{" "}
                    <span className="text-base font-[500]">- PrepShala</span>
                  </h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p>
                        Developed the website UI using ReactJs, optimized
                        backend workflows with Node.js, designed and
                        orchestrated REST API architecture and managed
                        databases, increasing new registration counts.
                        Implemented secure backend with MongoDB, and jwt token,
                        ensuring user security and performance. Introduced
                        features like College predictor, Notes, and one-to-one
                        counselling, achieving a 30% website traffic surge
                      </p>
                    </span>
                  </div>
                  <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                    <span className="">May 2023 - July 2023</span>
                    <span className="">Remote</span>
                  </div>
                </motion.li>
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
