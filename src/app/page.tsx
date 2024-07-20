import About from "@/components/common/About";
import Experience from "@/components/common/Experience";

import Hero from "@/components/common/Hero";
import Projects from "@/components/common/Projects";
import Skills from "@/components/common/Skills";
const aboutText =
  "Hello! I'm Ahmed Mansour, a passionate programmer with expertise in building websites from start to finish using technologies such as React.js, Node.js, Next.js, MongoDB, and Firebase. I enjoy solving complex problems and creating seamless user experiences. In addition to my web development skills, I've worked on several projects using React Native, including a sales program, a sound effects download program, a chat application with Firebase, and a complete e-commerce application.";
const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About aboutText={aboutText} imageUrl={"/e.jpg"} />

      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
