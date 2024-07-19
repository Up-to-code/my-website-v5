import Image from "next/image";
import React from "react";
interface SkileProps {
  name: string;
  image: string;
}
function Skile({ name, image }: SkileProps) {
  return (
    <div className=" justify-center  border  border-zinc-950 p-8 flex flex-col items-center hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#ffa856] hover:to-[#FF5656] hover:bg-zinc-950  hover:filter hover:drop-shadow-2xl   ">
      <div className="w-24 h-24 flex justify-center items-center">
        <Image
          translate="yes"
          loading="lazy"
          src={image}
          alt={name}
          width={100}
          height={100}
          className={name === "NextJS" ? "bg-white rounded-full" : ""}
        ></Image>{" "}
      </div>
      <h2 className="text-xl font-bold mt-4">
        {" "}
        <span className="">
          {" \t "}
          {name}
        </span>
      </h2>
    </div>
  );
}

export default Skile;
