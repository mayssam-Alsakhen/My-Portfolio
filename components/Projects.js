import { useState } from "react";
import Link from "next/link";
export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const container = {
   base:{ WebkitTransition: '1.5s ease-in-out',
    transition: '1.5s ease-in-out',
    transformStyle: 'preserve-3d'},
    hover: {
      WebkitTransform: 'rotateY(180deg)',
      transform: 'rotateY(180deg)',
    },
  };
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsHovered(false);
  };
const projects = [
  {
    id:1,
    title: 'Missed &Found',
    date :'August 2022',
    image : "m&f.png",
    link: 'https://drive.google.com/file/d/18gTLqI9tFBD89-NaJ4tMIxJ37yYRUJyX/view?usp=sharing',
    des: "A full-stack website developed utilizing the technology stack: Next.js for the frontend, Laravel for the backend, and Tailwind CSS for styling. MySQL was the database management system"
  },
  {
    id:2,
    title: 'Retouch',
    date :'July 2022',
    image : 'retouch.png',
    link: 'https://retouch.vercel.app/',
    des: "A Front-end website built using Nextjs and TailwindCss technologies"
  },
  {
    id:3,
    title: 'Aokcraft',
    date :'June 2022',
    image : 'oakraft.png',
    link: 'https://kitchen-tau.vercel.app/',
    des: "A Front-end website built using Nextjs and tailwindCss, and use mult_language feature that was implemented using i18next"
  },
  {
    id:4,
    title: 'Food Options',
    date :'June 2022',
    image : 'foodoption.png',
    link: 'https://food-options.vercel.app/',
    des: "A single page website built using Nextjs and tailwindCss"
  }
]

  return (
    <div className=" my-32 ">
      <h1
        id="projects"
        className="text-center py-3 text-5xl font-bold text-primary"
      >
        Projects
      </h1>
      <div className=" flex flex-wrap justify-around">
      {projects.map((project, index) => 
      <div key={index} className="my-10 mx-3 bg-secondary w-[350px] h-[250px] sm:w-[300px] rounded-tr-[40%] rounded-bl-[40%] relative" style={{
        ...container.base,
        ...(hoveredIndex === index && container.hover),
      }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}>
        
	<div className="z-20 absolute bg-cover bg-center  h-full rounded-tr-[40%] rounded-bl-[40%]" style={{transformStyle: "preserve-3d" ,backfaceVisibility: "hidden", backgroundImage: `url(${project.image})`}}>
    <div className=" bg-black/60 w-full h-full absolute rounded-tr-[40%] rounded-bl-[40%]"></div>
		<div style={{transform: "translatez(70px) scale(0.9) "}} className=" flex items-center h-full">
			<div className="p-2 text-center text-white w-[350px] sm:w-[300px]">
        <h1 className="font-extrabold text-3xl mb-2">{project.title}</h1>
        <h1 className="text-xl">{project.date}</h1>
			</div>
		</div>
	</div>
	<div  className=" z-0 absolute" style={{transformStyle: "preserve-3d" ,backfaceVisibility: "hidden", transform: "rotateY(180deg)"}}>
		<div style={{transform: "translatez(70px) scale(0.9)"}}>	
			<div className="p-2 text-center flex flex-col justify-center w-[350px] sm:w-[300px] h-[250px]">
			<p className=" text-xl pb-3">{project.des}</p>
      <p className=" font-bold text-2xl"><Link target="blank" href={project.link}> Demo</Link></p>
			</div>
		</div>
	</div>
</div>
)}
</div>
    </div>
  );
}
