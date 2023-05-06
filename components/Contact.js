import Image from "next/image";
import linkedin from "../public/linkedin.svg";
import whats from "../public/whats.svg";
import email from "../public/email.svg";
import github from "../public/github.svg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wdgj8ha', 'template_a5ovs3h', form.current, 'pJwIzZeW45XFNWPpw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className=" my-14">
      <h1
        id="contact"
        className="text-center py-3 text-5xl font-bold text-primary"
      >
        Contact me
      </h1>
      <div className=" w-3/4 mx-auto flex flex-wrap justify-evenly">
        <div className=" w-44 h-44  bg-primary bg-opacity-50 flex-col flex items-center justify-around p-3 md:w-28 md:h-28 sm:w-12 sm:h-12 sm:rounded-full ">
          <a href="https://wa.me/+96181575855" target="_blank" rel="noreferrer">
            {" "}
            <Image src={whats} alt="whatsapp" width={0} height={0} />
          </a>
          <a href="https://wa.me/+96181575855" target="_blank" rel="noreferrer">
            {" "}
            <p className=" font-bold sm:hidden">WhatsApp</p>{" "}
          </a>
          <p className=" text-center md:hidden"> Contact me on :+961-81575855</p>
        </div>

        <div className=" w-44 h-44  bg-primary bg-opacity-50 flex-col flex items-center justify-around p-3 md:md:w-28 md:h-28 sm:w-12 sm:h-12 sm:rounded-full">
          <a
            href="https://www.linkedin.com/in/mayssam-alsakhen/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image src={linkedin} alt="linkedin" width={0} height={0} />
          </a>
          <a
            href="https://www.linkedin.com/in/mayssam-alsakhen/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <p className=" font-bold sm:hidden">Linkedin</p>
          </a>
          <p className=" text-center md:hidden"> Take a look of my profile on linkedin</p>
        </div>

        <div className=" w-44 h-44 bg-primary bg-opacity-50 flex-col flex items-center justify-around p-3 md:md:w-28 md:h-28 sm:w-12 sm:h-12 sm:rounded-full">
          <a
            href="https://github.com/mayssam-Alsakhen"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image src={github} alt="github" width={0} height={0} />{" "}
          </a>
          <a
            href="https://github.com/mayssam-Alsakhen"
            target="_blank"
            rel="noreferrer"
          >
            <p className=" font-bold sm:hidden">GitHub</p>
          </a>
          <p className=" text-center md:hidden"> Check my GitHub repositories</p>
        </div>

        <div className=" w-44 h-44  bg-primary bg-opacity-50 flex-col flex items-center justify-around p-3 md:md:w-28 md:h-28 sm:w-12 sm:h-12 sm:rounded-full">
          <a href="mailto:mayssamalsakhen17@gmail.com">
            {" "}
            <Image src={email} alt="email" width={0} height={0} />
          </a>
          <a href="mailto:mayssamalsakhen17@gmail.com">
            {" "}
            <p className=" font-bold sm:hidden">Email</p>
          </a>
          <p className=" text-center break-all md:hidden">
            {" "}
            Message me on : mayssamalsakhen17@gmail.com
          </p>
        </div>
      </div>

      <div className="w-1/2 h-fit mx-auto bg-secondary mt-[-30px] p-10 md:w-11/12 sm:p-3 sm:mt-[-10px]">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-around">
          <input
            name="name"
            placeholder="Name"
            className="h-9 outline-none placeholder:text-primary bg-transparent border-primary border-b-[1px] p-1 mb-3"
          />
          <input
            name="email"
            placeholder="Email"
            className="h-9 outline-none placeholder:text-primary bg-transparent border-primary border-b-[1px]  p-1 mb-3"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            className="h-9 outline-none placeholder:text-primary p-1 bg-transparent border-primary border-b-[1px] mb-3"
          />
          <input
            name="subject"
            placeholder="Subject"
            className="h-9 outline-none placeholder:text-primary p-1 bg-transparent border-primary border-b-[1px] mb-3"
          />
          <textarea
          name="message"
            placeholder="Message"
            rows={4}
            className="outline-none placeholder:text-primary p-1 bg-transparent border-primary border-b-[1px] mb-3"
          />
          <button type="submit" className="bg-primary text-white font-bold w-1/4 mx-auto py-2">Send</button>
        </form>
      </div>
    </div>
  );
}
