import About from "@/components/common/About";
import Experience from "@/components/common/Experience";

import Hero from "@/components/common/Hero";
import Projects from "@/components/common/Projects";
import Skills from "@/components/common/Skills";
const aboutText =
  "Hello! I'm Ahmed Mansour, a passionate programmer with expertise in building websites from start to finish using technologies such as React.js, Node.js, Next.js, MongoDB, and Firebase. I enjoy solving complex problems and creating seamless user experiences. In addition to my web development skills, I've worked on several projects using React Native, including a sales program, a sound effects download program, a chat application with Firebase, and a complete e-commerce application.";
export const cv = "https://firebasestorage.googleapis.com/v0/b/my-website-310.appspot.com/o/%D8%B3%D9%8A%D8%B1%D8%A9%20%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9%20%D8%A7%D8%A8%D9%8A%D8%B6%20%D9%88%20%D8%B1%D9%85%D8%A7%D8%AF%D9%8A%20%D8%A8%D8%B3%D9%8A%D8%B7%20%D9%88%20%D8%AD%D8%AF%D9%8A%D8%AB.pdf?alt=media&token=98595253-b54a-4691-94dd-2c7927394b06"
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
