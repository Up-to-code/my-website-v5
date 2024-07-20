import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { cv } from "@/lib/cvurl"; 

interface HeroProps {
  // ...props
}

const Hero = ({}: HeroProps) => {
  return (
    <section className=" flex flex-col-reverse justify-center items-center md:flex-row   min-h-[500px] ">
      <div className="flex flex-col items-center text-start justify-center w-1/2 ">
        <div className="container mx-auto px-4 py-16 max-w-sm">
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#FF5656]">
              Ahmed {" \t "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffa856] to-[#FF5656]">
                Mansour
              </span>
            </span>
          </h1>
          <p className="text-2xl font-bold mb-8">
            Expert Programmer in
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffa856] to-[#FF5656]">
              {" \t "} Website
            </span>
            {" \t "}and{" \t "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffa856] to-[#FF5656]">
              Mobile {" \t "}
            </span>
            Applications
          </p>

          <Link href={cv} media="(orientation: portrait)" className="bg-gradient-to-r from-[#ffa856] text-white px-4 py-3 font-bold rounded  mt-6 to-[#f93d3d] " >
            My Resume
          </Link>
        </div>
      </div>
      <div className=" w-1/2 flex items-center justify-center">
        <div className="relative rounded-full overflow-hidden flex items-center justify-center">
          {/* Add a subtle blur effect to the background image */}
          <div className="absolute bottom-4 bg-gradient-to-b from-[#ffc814] to-[#FF5656]  blur-lg  w-[250px] h-[250px] rounded-full z-[-1]"></div>
          <Image
            src="/me.png"
            alt="Hero Image"
            width={300}
            height={300}
            className="rounded-full z-10"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
