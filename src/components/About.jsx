import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi. I'm Muhammad Isa Nuruddin.</p>
          </div>
          <div>
            <p>
              I am a fresh graduate in Informatics Engineering with a deep
              interest in web development, both on the frontend and backend
              sides. I am able to work effectively, both in a team and
              individually. I also have a strong understanding of modern web
              technologies and always strive to improve my skills in this field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
