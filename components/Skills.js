import Image from "next/image";
import css from "../public/css.svg";
import html from "../public/html.svg";
import js from "../public/js.svg";
import react from "../public/react.svg";
import next from "../public/next.svg";
import node from "../public/node.svg";
import laravel from "../public/laravel.svg";
import express from "../public/express.svg";
import sql from "../public/sql.svg";
import mongo from "../public/mongo.svg";
import mui from "../public/mui.svg";
import git from "../public/git.svg";
import tailwind from "../public/tailwind.svg";

export default function Skills() {
  return (
    <div className=" bg-secondary my-14">
      <h1
        id="skills"
        className="text-center py-3 text-5xl font-bold text-primary"
      >
        Skills
      </h1>
      <div className="flex flex-wrap justify-center ">
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={html}
            width={75}
            height={10}
            alt="html"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">HTML</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={css}
            width={75}
            height={10}
            alt="css"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">CSS</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={js}
            width={75}
            height={10}
            alt="js"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">JavaScript</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={react}
            width={75}
            height={10}
            alt="react"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">React</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={next}
            width={85}
            height={10}
            alt="next"
            className=" mb-10 sm:w-16 sm:mb-[53px]"
          />
          <p className=" text-black font-bold text-xl">NextJs</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={node}
            width={75}
            height={10}
            alt="node"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">Node Js</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={express}
            width={75}
            height={10}
            alt="express"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">Express JS</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={laravel}
            width={80}
            height={10}
            alt="laravel"
            className="mb-11 sm:w-16 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">Laravel</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={sql}
            width={80}
            height={10}
            alt="sql"
            className="mb-11 sm:w-16 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">MySQL</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={mongo}
            width={75}
            height={10}
            alt="mongo"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">Mongo DB</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={mui}
            width={75}
            height={10}
            alt="mui"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">Material UI</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={tailwind}
            width={75}
            height={10}
            alt="tailwind"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">Tailwind Css</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={git}
            width={75}
            height={10}
            alt="github"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-black font-bold text-xl">Git</p>
        </div>
      </div>
    </div>
  );
}
