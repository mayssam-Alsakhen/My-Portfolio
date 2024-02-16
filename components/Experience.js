import Link from 'next/link';
import { useEffect } from "react";
export default function Experience() {
 const experinces = [
  {
    id:1,
    img:'hexa.png',
    name:'HexaPi Tech',
    link:'https://hexapi.tech/index.html',
    date:'Sep 2023 - Oct 2023 ',
    desc:'Collaborate with a team to develop the front-end of the Tabibi platform (which was previously created), implement its functions, and improve its design'

  },
  {
    id:2,
    img:'das.png',
    name:'DAS360',
    link:'https://das-360.com/en/',
    date:'May 2022 - Jul 2022',
    desc:'Proficient in Next.js and Tailwind CSS, I specialize in front-end development, crafting websites front-end  while enhancing SEO performance through tools like Lighthouse.'

  },
  {
    id:3,
    img:'codi.png',
    name:'Codi_tech',
    link:'https://www.linkedin.com/school/codi.tech/',
    date:'Nov 2021 - Aug 2022',
    desc:'Full Stack Web Development Bootcamp, you have to be a self_leaener, a leader and an effective team member by management your projects with &apos;AGILE methodology&apos;; Technologies we used React, Bootstrap, Nodejs, Expressjs, MongoDB, SQL and Laralvel'

  }
 ]
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.target.classList.contains('card')) {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        event.target.style.setProperty('--xPos', `${x}px`);
        event.target.style.setProperty('--yPos', `${y}px`);

        event.target.style.background = `radial-gradient(80rem circle at ${x}px ${y}px, rgba(128, 0, 128, 0.3), transparent 15%)`;
        event.target.style.transform = 'scale(0.97)';
        const beforeStyle = window.getComputedStyle(event.target, '::before');
      if (beforeStyle) {
        event.target.style.setProperty('--before-opacity', '1');
      }
      }
    };

    const handleMouseLeave = (event) => {
      if (event.target.classList.contains('card')) {
        // Remove hover effect
        event.target.style.background = '';
        event.target.style.transform = 'initial';
        event.target.style.setProperty('--before-opacity', '0');
      }
    };
    const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
  });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });

    };
  }, []);

  return (
    <div className=" my-32 bg-[url('../public/ex.avif')] bg-cover bg-center py-5">
      <h1
        id="experience"
        className="text-center py-3 text-5xl font-bold text-primary"
      >
        Experience
      </h1>
      <div className="my-10 flex flex-wrap justify-around cards">
{/* start */}
{experinces.map((e, index)=> 
      <div key={e.id} className=" w-[500px] h-80 relative mt-14 sm:mx-5 sm:h-[420px] mb-10">
        <div className=" z-50 border-b-4 border-primary bg-white border-x w-36 h-36 rounded-full absolute left-44 top-[-50px] sm:left-[33%] sm:w-32 sm:h-32">
    <Link href={e.link} target="blank">  <div className=" w-full h-full rounded-full bg-contain bg-no-repeat bg-center" style={{backgroundImage:`url(${e.img})`}}></div></Link>  
        </div>
        <div
          className="card w-full h-full border-4 border-primary rounded-2xl text-center px-10 py-28 leading-7 sm:px-3"  
        >
          <div className="font-bold text-center">{e.name} </div>
          <div className="text-xs text-center">{e.date}</div>
                   {e.desc}

        </div>
      </div>
      )}
{/* end */}

        {/* <div className=" w-[500px] h-72 p-4 my-4 text-black bg-secondary sm:w-[300px] sm:h-fit sm:text-sm">
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
            Work as a Front-end developer building websites using Nextjs and
            TailwindCss, and improve search engine optimization (SEO) of the
            website through lighthouse.
          </p>
        </div>

        <div className="w-[500px] h-72 p-4 my-4 text-black bg-secondary sm:w-[300px] sm:h-fit sm:text-sm">
          <div>
            <a
              href="https://www.linkedin.com/school/codi.tech/"
              target="_blank"
              rel="noreferrer"
            >
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
            with &apos;AGILE methodology&apos;; Technologies we used React,
            Bootstrap, Nodejs, Expressjs, MongoDB, SQL and Laralvel
          </p>
        </div> */}
      </div>
    </div>
  );
}
