import { firestore } from "@/Firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import React from "react";

interface Project {
  title: string;
  cont: string;
  Skiles: string[];
  show: string;
  githup: string;
  Imageurl: string;
}

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  try {
    const refdoc = doc(firestore, "Projekts", params.id);
    const docSnap = await getDoc(refdoc);

    if (!docSnap.exists()) {
      return <div>Document does not exist</div>;
    }

    const project = docSnap.data() as Project;

    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16 flex flex-wrap justify-center items-start my-5">
          <ImageContainer imageUrl={project.Imageurl} title={project.title} />

          <ProjectDetails project={project} />
        </div>
        <p className="text-lg mb-8">{project.cont}</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching document:", error);
    return <div>Error fetching document</div>;
  }
}

interface ImageContainerProps {
  imageUrl: string;
  title: string;
}

const ImageContainer = ({ imageUrl, title }: ImageContainerProps) => (
  <div className="relative w-full lg:w-1/2 h-64 lg:h-auto flex justify-center items-start">
    <Image
      src={imageUrl}
      alt={title}
      width={300}
      height={200}
      className="rounded-lg w-full border border-zinc-700"
    />
  </div>
);

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => (
  <div className="flex flex-col items-center w-full lg:w-1/2 pl-4 ">
    <h1 className="text-4xl font-bold mb-4 max-w-72">{project.title}</h1>
    <SkillList skills={project.Skiles} />
    <ProjectLinks show={project.show} github={project.githup} />
  </div>
);

interface SkillListProps {
  skills: string[];
}

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-4 mb-8">
      {skills.map((skill, index) => (
        <li key={index} className={`text-center bg-gray-200 p-2 rounded-md`}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

interface ProjectLinksProps {
  show: string;
  github: string;
}

const ProjectLinks = ({ show, github }: ProjectLinksProps) => (
  <div className="flex gap-4">
    <a
      href={show}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Show Project"
    >
      <button className="bg-blue-600 px-6 py-2 rounded-md text-white font-bold shadow-md hover:bg-blue-700">
        Show
      </button>
    </a>
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Github Repository"
    >
      <button className="bg-blue-600 px-6 py-2 rounded-md text-white font-bold shadow-md hover:bg-blue-700">
        Github
      </button>
    </a>
  </div>
);
