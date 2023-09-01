import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Govt High School",
    location: "Kharian",
    description:
      "Done Matriculation from here in Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
  },
  {
    title: "Branch Accountant",
    location: "Lalamusa",
    description:
      "I worked as a branch accountant for 3 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Gujrat",
    description:
      "I'm now a front-end developer working as a freelancer. My stack includes Html, Css, React, Next.js, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "My Old Portfolio",
    description:
      "I build it on my learning stage. ",
    tags: ["HTML", "CSS", "Java Script", ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Second Portfolio",
    description:
      "it's my second portfolio. I build it for showing my some skills in Front-End Development field.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "BootStrap", ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "BootStrap",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  
 
  "Framer Motion",
] as const;
