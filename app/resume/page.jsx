"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaLaravel,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "Motivated and detail-oriented Full-Stack Developer and Software Engineering undergraduate with hands on experience in developing dynamic web and mobile applications. Skilled in Java, JavaScript, Node.js, React, PHP, MySQL, and Flutter with Firebase, with a strong foundation in object-oriented programming and database management. Passionate about building efficient, scalable solutions that enhance user experience and address real-world challenges. Eager to contribute to innovative projects and continuously expand technical expertise in global software development environments.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Chamath Danthanarayana",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 76 688 7096",
    },
    {
      fieldName: "Location",
      fieldValue: "Colombo, Sri Lanka",
    },
    {
      fieldName: "Email",
      fieldValue: "dcpoorna887@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "A journey of continuous learning that strengthened my foundation in computing, analytical thinking, and problem solving. My education has shaped my technical abilities and inspired a passion for innovation and technology driven solutions.",

  items: [
    {
      institute: "Sabaragamuwa University of Sri Lanka",
      degree: "BSc. Honours Degree in Computing and Information Systems",
      duration: "2023 - Present",
    },
    {
      institute: "Mahinda Rajapaksa College Homagama",
      degree: "G.C.E. Advanced Level - Physical Science Stream",
      duration: "2021",
    },
  ],
};

//skills data
const skills = {
  icon: "/assets/resume/skills.svg",
  title: "My Skills",
  description:
    "Here are some of the technologies and tools I have worked with:",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
  ],
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-start gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>

                        <h3 className="text-xl text-left">{item.degree}</h3>

                        <p className="text-white/60 break-words">
                          <span className="w-[6px] h-[13px] rounded-full bg-accent inline-block"></span>{" "}
                          {item.institute}
                        </p>
                      </li>
                    ))}g
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex text-left gap-2 flex-wrap py-3"
                    >
                      <span className="text-white/60 min-w-[90px] sm:min-w-[110px] inline-block">
                        {item.fieldName}:
                      </span>
                      <span className="text-xl text-white break-words">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
