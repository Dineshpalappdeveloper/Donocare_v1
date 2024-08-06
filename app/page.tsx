"use client";
import BottomFooter from "@/components/re/bottomFooter";
import LetsTalk from "@/components/re/letsTalk";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import op from "../utils/op";
import { useEffect, useRef } from "react";
import Hero from "@/components/home/hero";
import Optimizing from "@/components/home/optimizing";
import KeyDifference from "@/components/home/keyDifference";
import OurServices from "@/components/home/ourServices";
import BridgingTech from "@/components/home/bridgingTech";
import HelpClients from "@/components/home/helpClients";

export default function Home() {
  
  const letsTalkRef = useRef(null)
  const scrollTo = () => {
    letsTalkRef.current.scrollIntoView({ behavior: 'smooth' })
  };
 
  return (
    <>
      <motion.main
        initial="initial"
        animate="animate"
        variants={op}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
      >
        <Hero scrollTo={scrollTo}  />
        <Optimizing/>
        <KeyDifference />
        <OurServices/>
        <BridgingTech/>
        <HelpClients />
        
        
        
        {/**
         *
         */}

        
        

        <LetsTalk letsTalkRef={letsTalkRef} />
        <div className="mt-6">
          <BottomFooter />
        </div>
      </motion.main>
    </>
  );
}
