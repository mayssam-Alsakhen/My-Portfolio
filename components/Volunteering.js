import Image from 'next/image'
import life from '../public/life.jpeg'
import nas from '../public/nas.jpg'

export default function Volunteering() {
  return (
    <div className=" my-14">
       <h1 id="volunteer" className="text-center py-3 text-5xl font-bold text-primary">
        Volunteerig
      </h1>
      <div className='flex flex-wrap justify-around text-black'>
      <div className="my-10 w-80 h-96 p-12 rounded-t-full bg-[url('../public/vvbg.jpg')] bg-cover bg-center text-center border-2 border-primary">
        <p className="text-3xl font-bold mb-3"> Data Base</p>
        <div className='flex justify-center mb-2'><a href="https://www.linkedin.com/company/life-sculptor/"><Image src={life} width={80} height={10} alt='life sculptor' className="rounded-full border-primary border-2"/></a></div>
        <p className="text-xl mb-1"><a href="https://www.linkedin.com/company/life-sculptor/"> Life Sculptor </a></p>
        <p className=' text-xs mb-4'>Dec 2022 - Present</p>
        <p className=' text-lg'>Enter the data of the new students and add them to attend their trainings.</p>
      </div>

      <div className="my-10 w-80 h-96 p-12 rounded-t-full bg-[url('../public/vvbg.jpg')] bg-cover bg-center text-center border-2 border-primary">
        <p className="text-3xl font-bold mb-3"> Monitor </p>
        <div className='flex justify-center mb-2'><a href="https://www.linkedin.com/company/life-sculptor/"><Image src={life} width={80} height={10} alt='life sculptor' className="rounded-full border-primary border-2"/></a></div>
        <p className="text-xl mb-1"><a href="https://www.linkedin.com/company/life-sculptor/"> Life Sculptor </a></p>
        <p className=' text-xs mb-4'>Feb 2023 - Present</p>
        <p className=' text-lg'>Taking the attendence during the session and chacking on the workshop.</p>
      </div>

      <div className="my-10 w-80 h-96 p-12 rounded-t-full bg-[url('../public/vvbg.jpg')] bg-cover bg-center text-center border-2 border-primary">
        <p className="text-3xl font-bold mb-3">Tech & Devlopment</p>
        <div className='flex justify-center mb-2'><a href="https://www.linkedin.com/company/life-sculptor/"><Image src={life} width={80} height={10} alt='life sculptor' className="rounded-full border-primary border-2"/></a></div>
        <p className="text-xl mb-1"><a href="https://www.linkedin.com/company/life-sculptor/"> Life Sculptor </a></p>
        <p className=' text-xs mb-4'>Feb 2022 - Present</p>
        <p className=' text-lg'>Doing research about diffrent topics in copmuter science and web development.</p>
      </div>
      </div>
    </div>
  )
}
