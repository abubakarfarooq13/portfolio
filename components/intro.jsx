"use client";

import Image from "next/image";
import home from "@/public/home.jpg";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { FaWhatsappSquare } from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={home}
              alt="Abubakar"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
          🙂
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Aslamo Alaikum<br></br> I'm Abubakar.</span> I'm a{" "}
        <span className="font-bold">Full Stack Web Developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites</span>. My focus is{" "}
        <span className="underline">MERN,</span><span>React Native,Vue.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-blue-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-blue dark:bg-white/90 dark:text-black"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        
        
      </motion.div>
      <br></br>
      <motion.div className="flex text-3xl drop-shadow-2xl  flex-row sm:flex-row items-center justify-center gap-2 px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
      <a
          className="bg-blue-700 p-4   text-gray-100 hover:text-gray-100  gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-Black dark:bg-blue-700 dark:text-gray-100"
          href="https://www.facebook.com/profile.php?id=100094739877088"
          target="_blank"
        >
          <FaFacebookSquare className=""/>
        </a>

        <a
          className="bg-green-600 p-4   text-gray-100  gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-100 active:scale-105 transition cursor-pointer border-Black dark:bg-green-600 dark:text-gray-100"
          href="https://wa.me/923039346104?text=Aslamo%20Alaikum%0AAbubakar%20I%20like%20you'r%20web%20&#128522"
          target="_blank"
        >
          <FaWhatsappSquare />
        </a>
        <a
          className="bg-gradient-to-r from-pink-500 from-10% via-red-500 via-30% to-orange-500 to-90% p-4   text-gray-100  gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-100 active:scale-105 transition cursor-pointer border-Black dark:bg-gradient-to-r from-pink-500 from-10% via-red-500 via-30% to-orange-500 to-90% dark:text-gray-100"
          href="https://www.instagram.com/abubakar_farooq13/"
          target="_blank"
        >
          <FaInstagramSquare/>
        </a>
        <a
          className="bg-blue-500 p-4   text-gray-100  gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-100 active:scale-105 transition cursor-pointer borderBlack dark:bg-blue/10 dark:text-white/100
         "
          href="https://www.linkedin.com/in/abubakrfarooq"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
