import Skile from "./Skile";
import Title from "./Title";

interface SkillsProps {
  // ...props
}

const Skills = ({}: SkillsProps) => {
  return (
    <section className="">
      <div className="container mx-auto px-4 py-16">
        <Title title="My" subtitle="Skills" />
        <div className=" flex  flex-wrap my-8 gap-5 justify-around">
          <Skile name="React" image="/react.png" />
          <Skile name="React Native" image="/expo.svg" />
          <Skile name="NextJS" image="/Next.png" />
          <Skile name="MongoDB" image="/mongo.svg" />

          <Skile name="Firebase" image="/firebase.png" />
          <Skile name="TypeScript" image="/type.svg" />
          <Skile name="Tailwind CSS" image="/tailwind-css.svg" />
          <Skile name="JavaScript" image="/javascript.svg" />
          <Skile name="NodeJS" image="/node.svg" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
