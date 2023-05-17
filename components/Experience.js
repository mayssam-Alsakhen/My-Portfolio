import Image from "next/image";
import das from "../public/das.png";
import codi from "../public/codi.png";
export default function Experience() {
  return (
    <div className=" my-14">
      <h1
        id="experience"
        className="text-center py-3 text-5xl font-bold text-primary"
      >
        Experience
      </h1>

      <div className=" flex flex-wrap justify-around">
        <div className="w-[500px] h-72 p-4 my-4 text-black bg-secondary sm:w-[300px] sm:h-fit sm:text-sm">
          <div>
            <a href="https://das-360.com/en/" target="_blank" rel="noreferrer">
              <Image
                alt="das360 logo"
                src={das}
                width={150}
                height={100}
                className="mx-auto"
              />
              <p className="font-bold text-center">DAS360</p>
            </a>
            <p className=" text-xs text-center">May 2022 - Jul 2022</p>
          </div>
          <hr className="w-5/6 mx-auto m-3 border-[1px] border-secondary "></hr>
          <p className="px-2 text-justify leading-7 ">
            Work as a Front-end developer building website using Nextjs and
            TailwindCss, and improve search engine optimization (SEO) of the
            website through lighthouse.
          </p>
        </div>

        <div className="w-[500px] h-72 p-4 my-4 text-black bg-secondary sm:w-[300px] sm:h-fit sm:text-sm">
          <div>
            <a href="https://www.linkedin.com/school/codi.tech/" target="_blank" rel="noreferrer">
              <Image
                alt="codi_tech logo"
                src={codi}
                width={150}
                height={100}
                className="mx-auto"
              />
              <p className="font-bold text-center">Codi_Tech</p>
            </a>
            <p className=" text-xs text-center">Nov 2021 - Aug 2022</p>
          </div>
          <hr className="w-5/6 mx-auto m-3 border-[1px] border-secondary "></hr>
          <p className="px-2 text-justify leading-7 ">
            Full Stack Web Development Bootcamp, you have to be a self_leaener,
            a leader and an effective team member by management your projects
            with &apos;AGILE methodology&apos;; Technologies we used React, Bootstrap,
            Nodejs, Expressjs, MongoDB, SQL and Laralvel 
          </p>
        </div>
      </div>
    </div>
  );
}
