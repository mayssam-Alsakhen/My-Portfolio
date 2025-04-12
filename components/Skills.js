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
  const skills = [
    {
      id: 1,
      title: "HTML",
      image: html,
    },
    {
      id: 2,
      title: "CSS",
      image: css,
    },
    {
      id: 3,
      title: "JavaScript",
      image: js,
    },
    {
      id: 4,
      title: "React",
      image: react,
    },
    {
      id: 5,
      title: "NextJs",
      image: next,
    },
    {
      id: 6,
      title: "NodeJs",
      image: node,
    },
    {
      id: 7,
      title: "Express.js",
      image: express,
    },
    {
      id: 8,
      title: "Laravel",
      image: laravel,
    },
    {
      id: 9,
      title: "MySQL",
      image: sql,
    },
    {
      id: 10,
      title: "MongoDB",
      image: mongo,
    },
  ];
  return (
    <div className="my-32">
      <h1
        id="skills"
        className="text-center py-3 text-5xl font-bold text-primary"
      >
        Skills
      </h1>
      <div className="flex flex-wrap justify-center ">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-110 duration-300  w-40 h-56 flex flex-col justify-center items-center"
          >
            <Image
              src={skill.image}
              width={75}
              height={10}
              alt="html"
              className=""
            />
            <p className=" text-black font-bold text-xl">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
