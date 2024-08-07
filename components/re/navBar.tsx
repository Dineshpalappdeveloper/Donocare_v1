"use client";
import op from "@/utils/op";
import { motion, useInView } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.jpg";
import { useRef, useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="  bg-white">
        <nav className="flex justify-between  items-center pl-4 ">
          <div>
            <label className="text-primaryGreen font-bold   text-xl   pl-4 flex items-center cursor-pointer ">
              <Image src={logo} height={80} width={100} alt="logo"></Image>
            </label>
          </div>
          <a className=" lg:hidden">
            <Hamburger toggled={isOpen} size={22} toggle={setOpen} />
          </a>{" "}
          <div className="hidden  lg:block">
            {
              <LapView
                setopen={() => {
                  setOpen;
                }}
              />
            }
          </div>
        </nav>
      </div>

      {isOpen ? (
        <MobileNav
          setopen={() => {
            setOpen(false);
          }}
        />
      ) : null}
    </>
  );
}

function LapView({ setopen }) {
  return (
    <>
      <div className="">
        <div className="flex w-full xl:gap-x-[15vh] xl:pr-[10vh]  gap-x-[7vh] pr-[7vh] justify-center items-center ">
          <li className="flex gap-x-[4vh] xl:gap-x-[6vh] text-lg justify-center items-center">
            <Link
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500 hover:underline font-bold "
              onClick={setopen}
              href={"/"}
            >
              Home
            </Link>

            <Link
              onClick={setopen}
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500 hover:underline font-bold "
              href={"/itservices"}
            >
              Services
            </Link>

            <Link
              onClick={setopen}
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500 hover:underline font-bold "
              href={"/about"}
            >
              Our Vision
            </Link>
            <Link
              onClick={setopen}
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500 hover:underline font-bold "
              href={"/contact"}
            >
              Contact
            </Link>
          </li>
          {/* <motion.li
            className="list-none"
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
          >
            <Link
              onClick={setopen}
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500 hover:underline font-bold "
              href={"/login"}
            >
              Login
            </Link>
          </motion.li> */}
        </div>
      </div>
    </>
  );
}

function MobileNav({ setopen }) {
  return (
    <>
      <div className="absolute flex flex-col  z-50 w-fit h-fit py-2 bg-white top-[10vh] right-0  p-4 min-w-[50vw]">
        <div className="flex flex-col h-fit justify-between ">
          <li className=" list-none flex flex-col space-y-4 pt-4  justify-end items-center text-center    ">
            <Link onClick={setopen} className=" " href={"/"}>
              Home
            </Link>
            <Link onClick={setopen} className=" " href={"/itservices"}>
              Services
            </Link>
            <Link onClick={setopen} className=" " href={"/about"}>
              Our Vision
            </Link>
            <Link onClick={setopen} className=" " href={"/contact"}>
              Contact
            </Link>
          </li>
          {/* <label className="text-xs font-light text-gray-600 text-center pt-6 pb-2 ">
            Employee ?
            <span className="text-sm text-pH font-normal">
              {" "}
              <Link onClick={setopen} href={"/login"}>
                Login
              </Link>
            </span>
          </label> */}
        </div>
      </div>
    </>
  );
}
