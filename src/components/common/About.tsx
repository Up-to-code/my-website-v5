import Image from "next/image";
import Title from "./Title";

interface AboutProps {
  aboutText: string;
  imageUrl: string;
}

const About = ({ aboutText, imageUrl }: AboutProps) => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <Title title="" subtitle="About Me" />
        <div className="mb-6 flex justify-around items-center">
            <div className="relative flex justify-center items-center">
            <div className="absolute  bg-gradient-to-b from-[#ffc814] to-[#FF5656]  blur-lg  w-[200px] h-[200px] rounded-full z-[-1]"></div>
            <Image
            src={imageUrl}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full"
          />    
            </div>

          <p className="text-lg text-start max-w-xl font-bold">{aboutText}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
