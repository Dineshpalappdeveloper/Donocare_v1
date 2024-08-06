"use client";
import op from "@/utils/op";
import { motion, useInView } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className=" mb-[-2px]">
        <nav className="flex justify-between m-4 items-center pl-4 ">
          <label className="text-primaryGreen font-bold text- pl-4 ">
            FIN INFOLIB
          </label>
          <a className=" lg:hidden">
            <Hamburger toggled={isOpen} size={22} toggle={setOpen} />
          </a>{" "}
          <div className="hidden  lg:block">
            {
              <LapView setopen={() => { setOpen }} />
            }
          </div>
        </nav>
      </div>

      {
        isOpen
          ? <MobileNav setopen={() => { setOpen(false) }} />
          : null
      }
    </>
  );
}



function LapView({ setopen }) {
  return (
    <>
      <div className="">
        <div className="flex w-full xl:gap-x-[15vh] xl:pr-[10vh]  gap-x-[7vh] pr-[7vh] justify-center items-center ">
          <li className="flex gap-x-[4vh] xl:gap-x-[6vh] text-lg justify-center items-center">
            <Link className=" flex border px-6 rounded-md py-2  hover:bg-pH hover:text-white "
             onClick={setopen}
              href={'/'}>Home</Link>

            <Link onClick={setopen} className=" flex border px-6 rounded-md py-2  hover:bg-pH hover:text-white "
              href={'/about'}>About</Link>

            <Link onClick={setopen} className=" flex border px-6 rounded-md py-2  hover:bg-pH hover:text-white "
              href={'/contact'}>Contact</Link>

            <Link onClick={setopen} className=" flex border px-6 rounded-md py-2  hover:bg-pH hover:text-white "
              href={'/itservices'}>It Services</Link>

          </li>
          <motion.li className="list-none"  
         initial="initial"
         animate="animate"
          whileHover={
            {
              scale:1.2
            }
          }
          transition={{
            duration:0.7,
            delay:0.1,
            ease:[0.6,0.01,0.05,0.95]
          }}
          >
           <Link className="text-lg rounded-lg px-8 bg-pH py-3 text-white
           " onClick={setopen} href={'/login'}>Login</Link></motion.li>
        </div>


      </div>

    </>
  )

}


function MobileNav({ setopen }) {

  return (
    <>
      <div
        className="absolute flex flex-col  z-50 w-fit h-fit py-2 bg-white top-[10vh] right-0  p-4">
        <div className="flex flex-col h-fit justify-between ">
          <li className=" list-none flex flex-col space-y-4 pt-4  justify-end items-center text-center    " >
            <Link onClick={setopen} className=" "
             href={'/'}>Home</Link>
            <Link onClick={setopen} className=" "
             href={'/about'}>About</Link>
            <Link onClick={setopen} className=" "
              href={'/contact'}>Contact</Link>
            <Link onClick={setopen} className=" "
             href={'/itservices'}>It Services</Link>

          </li>
          <label className="text-xs font-light text-gray-600 text-center pt-6 pb-2 ">Employee ?
            <span className="text-sm text-pH font-normal"> <Link onClick={setopen} href={'/login'}>Login</Link></span></label>
        </div>


      </div>

    </>
  )
}