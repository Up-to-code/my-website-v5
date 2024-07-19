"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cv } from "@/app/page";

interface HeaderProps {
  // ...props
}

const Header = ({}: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="min-h-[56px]  px-4 max-w-5xl m-auto flex flex-col md:flex-row justify-between items-center py-8 md:py-0 text-black">
      <Link href="/">
        <h1 className="text-xl font-bold mr-4 md:mr-0 flex justify-center items-center gap-2">
          Ahmed{" "}
          <span className="bg-black px-2 py-1 text-white  rounded ">
            Mansour
          </span>
        </h1>
      </Link>
      <nav className="flex flex-col md:flex-row mt-4 md:mt-0">
    
      </nav>
      <Link href={cv} className=" text-white px-4 py-2 font-bold mt-4 md:mt-0 bg-zinc-950 justify-center items-center  gap-2 rounded hidden md:flex">
        {/* Hamburger icon */}
        Resume
        <Image src="/resume-icon.png" alt="Resume" width={15} height={15} />
      </Link>
      {/* Mobile navigation */}
    </header>
  );
};

export default Header;
