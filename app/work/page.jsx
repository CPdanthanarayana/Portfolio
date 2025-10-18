"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Mobile App",
    title: "Capstone Project",
    description:
      "EleFence360 is an IoT-based solution developed to reduce human–elephant conflict by detecting elephant presence near electric fences and monitoring fence conditions in real time. The system employs a humane deterrence approach, alerting elephants without causing harm, while simultaneously notifying villagers and authorities via the EleGuardian mobile app for timely action.",
    stack: [{ name: "Flutter" }, { name: "Arduino" }, { name: "Firebase" }],
    image: "/assets/work/project-1.jpg",
    live: "",
    github: "https://github.com/GayaniGunasekara/EleFence360.git",
  },
  {
    num: "02",
    category: "Web App",
    title: "SkillSwap",
    description:
      "SkillSwap is a web application designed to facilitate skill sharing and learning among users. The platform allows individuals to offer their skills and expertise in exchange for learning new skills from others. With a user-friendly interface and robust matching algorithms, SkillSwap aims to create a vibrant community of learners and educators.",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Node JS" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/project-2.jpg",
    live: "",
    github: "https://github.com/CPdanthanarayana/SKILLSWAP.git",
  },
  {
    num: "03",
    category: "Web App",
    title: "Fixora",
    description:
      "A web based platform where users can upload problem cards for repairs, workers can share job cards, and both parties can connect and chat through the website. Designed to simplify repair requests, improve communication, and streamline service management.",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Django" },
      { name: "SQLite" },
    ],
    image: "/assets/work/project-3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Web App",
    title: "Community Project",
    description:
      "A web-based system designed to automate school timetable creation, minimizing manual work and scheduling conflicts. The system efficiently assigns teachers, subjects, and classrooms to ensure accurate and well-organized timetables for schools.",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "FastAPI" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/project-1.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* Live button button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
