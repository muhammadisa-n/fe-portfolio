import React from "react";

import HTMLImg from "../assets/html.png";
import CSSImg from "../assets/css.png";
import JavaScriptImg from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import NodeJsImg from "../assets/node.png";
import TailwindImg from "../assets/tailwind.png";
import PHPImg from "../assets/php.png";
import LaravelImg from "../assets/laravel.png";
import TypescriptImg from "../assets/typescript.png";
import ExpressJsImg from "../assets/expressjs.png";
import VuejsImg from "../assets/vuejs.png";
import MySQLImg from "../assets/mysql.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTMLImg} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSSImg} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScriptImg} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypescriptImg} alt="HTML icon" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PHPImg} alt="HTML icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TailwindImg} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={VuejsImg} alt="HTML icon" />
            <p className="my-4">VUE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NodeJsImg} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ExpressJsImg} alt="HTML icon" />
            <p className="my-4">EXPRESS JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={LaravelImg} alt="HTML icon" />
            <p className="my-4">Laravel</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQLImg} alt="HTML icon" />
            <p className="my-4">MYSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
