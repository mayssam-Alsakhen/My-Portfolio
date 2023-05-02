import Image from "next/image";
import linkedin from '../public/linkedin.svg'
import whats from '../public/whats.svg'
import email from '../public/email.svg'
import github from '../public/github.svg'


export default function Contact() {
  return (
    <div > 
      <h1 id="contact" className="text-center py-3 text-5xl font-bold text-primary">
        Contact me
      </h1>
      {/* <div className=" w-[80%] rounded-3xl mx-auto bg-[#fdf5ee]">
        <div className="flex flex-col w-full h-full rounded-3xl  border-2 border-basic ">
          <form className="w-3/5 m-auto flex flex-col justify-around">
              <input
                name="Name"
                placeholder="Name"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <input
                name="Name"
                placeholder="Email"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <input
                name="Name"
                placeholder="Subject"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <textarea placeholder="Message" rows={6} className="outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"/>
          </form>
            <button>submit</button>
        </div>
      </div> */}
      <div className=" w-3/4 mx-auto flex flex-wrap justify-evenly">
        <div className=" w-44 h-44  bg-primary bg-opacity-80 flex-col flex items-center justify-around p-3 md:mb-3 ">
        <a href="https://wa.me/+96181575855" target="_blank" rel="noreferrer"> <Image src={whats} alt="whatsapp" width={0} height={0}/></a>
          <a href="https://wa.me/+96181575855" target="_blank" rel="noreferrer"> <p className=" font-bold">WhatsApp</p> </a>
         <p className=" text-center"> Contact me on :+961-81575855</p>
        </div>

        <div className=" w-44 h-44  bg-primary bg-opacity-80 flex-col flex items-center justify-around p-3 md:mb-3">
         <a href="https://www.linkedin.com/in/mayssam-alsakhen/" target="_blank" rel="noreferrer"> <Image src={linkedin} alt="linkedin" width={0} height={0}/></a>
         <a href="https://www.linkedin.com/in/mayssam-alsakhen/" target="_blank" rel="noreferrer"> <p className=" font-bold">Linkedin</p></a>
         <p className=" text-center"> Take a look  of my profile on linkedin</p>
        </div>

        <div className=" w-44 h-44  bg-primary bg-opacity-80 flex-col flex items-center justify-around p-3 md:mb-3">
        <a href="https://github.com/mayssam-Alsakhen" target="_blank" rel="noreferrer"> <Image src={github} alt="github" width={0} height={0}/> </a>
        <a href="https://github.com/mayssam-Alsakhen" target="_blank" rel="noreferrer"><p className=" font-bold">GitHub</p></a> 
         <p className=" text-center"> Check my GitHub repositories</p>
        </div>

        <div className=" w-44 h-44  bg-primary bg-opacity-80 flex-col flex items-center justify-around p-3 md:mb-3">
        <a href="mailto:mayssamalsakhen17@gmail.com"> <Image src={email} alt="email" width={0} height={0}/></a>  
        <a href="mailto:mayssamalsakhen17@gmail.com"> <p className=" font-bold">Email</p></a>
         <p className=" text-center break-all"> Message me on : mayssamalsakhen17@gmail.com</p>
        </div>
      </div>

      <div className="w-1/2 h-fit mx-auto border-primary border-2 mt-[-30px] p-10 md:w-11/12 sm:p-3">
        <form className="flex flex-col justify-around">
        <input
                name="Name"
                placeholder="Name"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <input
                name="Name"
                placeholder="Email"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <input
                name="Name"
                placeholder="phone"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <input
                name="Name"
                placeholder="Subject"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <textarea placeholder="Message" rows={6} className="outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"/>
              <button>submit</button>
        </form>
      </div>
    </div>
  );
}
