/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import ProjctCart from "./ProjctCart";
import Title from "./Title";
import { Skeleton } from "../ui/skeleton";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/Firebase/firebaseConfig";
interface ProjectProps {
  // ...props
}

const Projects = ({}: ProjectProps) => {
  const [Projcts, setProjcts] = useState<any>([]);

  useEffect(() => {
    if (Projcts && Projcts.length) return;
    const getProjectsAsync = async () => {
      const col = collection(firestore, "Projekts");

      try {
        const snapshot = await getDocs(col);

        setProjcts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
    };

    getProjectsAsync();
  }, []);

  return (
    <section className="my-8">
      <div className="container mx-auto px-4 py-16">
        <Title title="My" subtitle="Projects" />
        <div>
          <div className=" flex flex-wrap justify-around items-center gap-5">
            {Projcts.length ? (
              Projcts.map((project: any) => (
                <ProjctCart
                  key={project.id}
                  name={project.title}
                  image={project.Imageurl}
                  id={project.id}
                />
              ))
            ) : (
              <>
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl"></Skeleton>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]"></Skeleton>
                    <Skeleton className="h-4 w-[200px]"></Skeleton>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl"></Skeleton>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]"></Skeleton>
                    <Skeleton className="h-4 w-[200px]"></Skeleton>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl"></Skeleton>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]"></Skeleton>
                    <Skeleton className="h-4 w-[200px]"></Skeleton>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl"></Skeleton>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]"></Skeleton>
                    <Skeleton className="h-4 w-[200px]"></Skeleton>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl"></Skeleton>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]"></Skeleton>
                    <Skeleton className="h-4 w-[200px]"></Skeleton>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl"></Skeleton>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]"></Skeleton>
                    <Skeleton className="h-4 w-[200px]"></Skeleton>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
