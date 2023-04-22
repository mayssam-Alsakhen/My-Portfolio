import Image from "next/image";
import css from "../public/css.png";
import html from "../public/html.png";
import js from "../public/js.png";
import react from "../public/react.png";
import next from "../public/next.png";
import node from "../public/node.png";
import laravel from "../public/laravel.png";
import express from "../public/express.png";
import sql from "../public/sql.png";
import mongo from "../public/mongo.png";
import mui from "../public/mui.png";
import tailwind from "../public/tailwind.png";

export default function Skills() {
  return (
    <div>
      <h1
        id="skills"
        className="text-center py-3 text-5xl font-bold text-primary"
      >
        Skills
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={html}
            width={75}
            height={10}
            alt="html"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">HTML</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={css}
            width={75}
            height={10}
            alt="css"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">CSS</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={js}
            width={75}
            height={10}
            alt="js"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">JavaScript</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={react}
            width={75}
            height={10}
            alt="react"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">React</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={next}
            width={85}
            height={10}
            alt="next"
            className=" mb-10 sm:w-16 sm:mb-[53px]"
          />
          <p className=" text-secondary font-bold text-xl">NextJs</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={node}
            width={75}
            height={10}
            alt="node"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">Node Js</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={express}
            width={75}
            height={10}
            alt="express"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">Express JS</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={laravel}
            width={80}
            height={10}
            alt="laravel"
            className="mb-11 sm:w-16 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">Laravel</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={sql}
            width={80}
            height={10}
            alt="sql"
            className="mb-11 sm:w-16 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">MySQL</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={mongo}
            width={75}
            height={10}
            alt="mongo"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">Mongo DB</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={mui}
            width={75}
            height={10}
            alt="mui"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">Material UI</p>
        </div>
        <div className="bg-[url('../public/heart.svg')] bg-cover bg-no-repeat w-64 h-60 flex flex-col justify-end items-center sm:w-[187px] sm:h-52 sm:bg-contain">
          <Image
            src={tailwind}
            width={75}
            height={10}
            alt="tailwind"
            className="mb-11 sm:w-14 sm:mb-14"
          />
          <p className=" text-secondary font-bold text-xl">Tailwind Css</p>
        </div>
      </div>
    </div>
  );
}
