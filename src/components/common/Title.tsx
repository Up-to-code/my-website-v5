import React from "react";
interface TitleProps {
  title: string;
  subtitle?: string;
}
function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="text-center my-4">
      <h1 className="text-3xl ">
        {title}  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffa856] to-[#FF5656] font-bold">
        {" \t "}{subtitle}</span>
      </h1>
    </div>
  );
}

export default Title;
