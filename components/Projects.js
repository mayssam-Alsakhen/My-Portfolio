import Image from "next/image";
import mf from "../public/m&f.png";
import oac from "../public/oakraft.png";
import fo from "../public/foodoption.png";
import ret from "../public/retouch.png";

export default function Projects() {
  return (
    <div>
      <h1
        id="projects"
        className="text-center py-3 text-5xl font-bold text-primary"
      >
        {" "}
        Projects
      </h1>

      <div className=" flex flex-wrap justify-around text-white ">
        <div className=" flex items-center m-4">
          <div className="w-32 h-32 bg-gradient-to-tr from-secondary via-gray-400 to-secondary rounded-full z-10 flex items-center justify-center mr-[-60px] sm:w-28 sm:h-28 sm:mr-[-46px]">
            {" "}
            <Image src={mf} alt="missed and found " width={100} height={100} />
          </div>
          <div className="w-[380px] h-32 bg-primary flex flex-col items-center text-justify rounded-2xl py-2 sm:w-60 sm:h-28">
            <p className=" font-bold leading-4">Missed and Found</p>
            <p className=" text-xs pb-2"> August 2022</p>
            <p className="w-3/5 sm:text-xs">
              {" "}
              A Full Stack website built using Nextjs, tailwindCss, Laravel and
              MySQL
            </p>
          </div>
        </div>

        <div className=" flex items-center m-4">
          <div className="w-32 h-32 bg-gradient-to-tr from-secondary via-gray-400 to-secondary rounded-full z-10 flex items-center justify-center mr-[-60px] sm:w-28 sm:h-28 sm:mr-[-46px]">
            {" "}
            <Image src={ret} alt="retouch" width={100} height={100} />
          </div>
          <div className="w-[380px] h-32 bg-primary flex flex-col items-center text-justify rounded-2xl py-2 sm:w-60 sm:h-28">
            <p className=" font-bold leading-4">Retouch</p>
            <p className=" text-xs pb-2">July 2022</p>
            <p className="w-3/5 sm:text-xs">
              {" "}
              A Front-end website built using Nextjs and tailwindCss
            </p>
          </div>
        </div>

        <div className=" flex items-center m-4">
          <div className="w-32 h-32 bg-gradient-to-tr from-secondary via-gray-400 to-secondary rounded-full z-10 flex items-center justify-center mr-[-60px] sm:w-28 sm:h-28 sm:mr-[-46px]">
            {" "}
            <Image src={oac} alt="Oakcraft" width={100} height={100} />
          </div>
          <div className="w-[380px] h-32 bg-primary flex flex-col items-center text-justify rounded-2xl py-2 sm:w-60 sm:h-28">
            <p className=" font-bold leading-4">Aokcraft</p>
            <p className=" text-xs pb-2">June 2022</p>
            <p className="w-3/5 sm:text-xs">
              {" "}
              A Front-end website built using Nextjs and tailwindCss
            </p>
          </div>
        </div> 

        <div className=" flex items-center m-4">
          <div className="w-32 h-32 bg-gradient-to-tr from-secondary via-gray-400 to-secondary rounded-full z-10 flex items-center justify-center mr-[-60px] sm:w-28 sm:h-28 sm:mr-[-46px]">
            {" "}
            <Image src={fo} alt="food options" width={100} height={100} />
          </div>
          <div className="w-[380px] h-32 bg-primary flex flex-col items-center text-justify rounded-2xl py-2 sm:w-60 sm:h-28">
            <p className=" font-bold leading-4">Food Options</p>
            <p className=" text-xs pb-2"> June 2022</p>
            <p className="w-3/5 sm:text-xs">
              {" "}
              A Front-end website built using Nextjs and tailwindCss
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
}
