function About() {
  return (
    <div>
      <div className="w-full h-[523px] bg-[url('../public/about.png')] bg-cover bg-center bg-no-repeat sm:h-64">
        <p className=" text-primary font-bold text-4xl w-[57%] h-full text-center flex justify-center items-center sm:text-2xl sm:w-[73%]">
          Hello ... <br /> I am Mayssam <br />
          Full Stack Developper
        </p>
      </div>

      <h1
        id="about"
        className="text-center py-3 text-5xl font-bold text-primary"
      >
        About me
      </h1>
      <div>
        <div className=" w-[80%] mx-auto text-justify text-2xl leading-10 py-5 font-semibold sm:text-lg sm:w-[90%]">
          Hello! My name is Mayssam I am a full stack web developer. Currently, I
          am a Computer Science student at Lebanese International University
          (LIU); I enjoy all the little details of programming and coding. My
          passion for coding started from reading articles about programming to
          trying some simple codes on my phone, and my curiosity about these
          obscure codes took me doing my research to know more about the field
          after that I enrolled in a full stack web development boot-camp with
          Codi-tech where you have to be hard-worker, fast-learner,
          self-educated and team player, and you have to challenge yourself to
          answer your questions and solve your problems by doing researches.
          Also you are not required to finish your projects by yourself only but
          by collaborating and management with your team members. Technologies
          that I use are Nextjs, Reactjs, Nodejs and Laravel...
        </div>
      </div>
    </div>
  );
}

export default About;
