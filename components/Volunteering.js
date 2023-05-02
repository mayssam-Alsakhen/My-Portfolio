import Image from 'next/image'
import life from '../public/life.jpeg'
import nas from '../public/nas.jpg'

export default function Volunteering() {
  return (
    <div>
       <h1 id="volunteer" className="text-center py-3 text-5xl font-bold text-primary">
        Volunteerig
      </h1>
      <div className='flex flex-wrap justify-around text-secondary sm:flex-col md:items-center'>
      <div className="my-12 w-80 h-96 p-12 rounded-t-full bg-primary bg-opacity-50 text-center">
        <p className="text-3xl font-bold mb-3"> Data Base</p>
        <div className='flex justify-center mb-2'><a href="https://www.linkedin.com/company/life-sculptor/"><Image src={life} width={80} height={10} alt='life sculptor' className="rounded-full border-basic border-2"/></a></div>
        <p className="text-xl mb-1"><a href="https://www.linkedin.com/company/life-sculptor/"> Life Sculptor </a></p>
        <p className=' text-xs mb-4'>Dec 2022 - Present</p>
        <p className=' text-lg'>Enter the data of the new students and add them to attend their trainings.</p>
      </div>

      <div className="my-12 w-80 h-96 p-12 rounded-t-full bg-primary bg-opacity-50 text-center">
        <p className="text-3xl font-bold mb-3"> Managment</p>
        <div className='flex justify-center mb-2'><a href="https://www.facebook.com/naslebanon/?paipv=0&eav=AfY_QyOznrYUCBUItRisWmPrcF_KwyI-YtFM6G918cOJZpJ2tivZxw3Udr3osi6Rhdk&_rdr"><Image src={nas} width={80} height={10} alt='nas' className="rounded-full border-basic border-2"/></a></div>
        <p className="text-xl mb-1"><a href="https://www.facebook.com/naslebanon/?paipv=0&eav=AfY_QyOznrYUCBUItRisWmPrcF_KwyI-YtFM6G918cOJZpJ2tivZxw3Udr3osi6Rhdk&_rdr"> NAS </a></p>
        <p className=' text-xs mb-4'>A project for about 24 hours</p>
        <p className=' text-lg'>Helping in management and organizing the kids within “ Al-Musaqaf Al-Saghir” competition. </p>
      </div>

      <div className="my-12 w-80 h-96 p-12 rounded-t-full bg-primary bg-opacity-50 text-center">
        <p className="text-3xl font-bold mb-3"> Monitor </p>
        <div className='flex justify-center mb-2'><a href="https://www.linkedin.com/company/life-sculptor/"><Image src={life} width={80} height={10} alt='life sculptor' className="rounded-full border-basic border-2"/></a></div>
        <p className="text-xl mb-1"><a href="https://www.linkedin.com/company/life-sculptor/"> Life Sculptor </a></p>
        <p className=' text-xs mb-4'>Feb 2023 - Present</p>
        <p className=' text-lg'>Taking the attendence during the session and chacking on the workshop.</p>
      </div>

      <div className="my-12 w-80 h-96 p-12 rounded-t-full bg-primary bg-opacity-50 text-center">
        <p className="text-3xl font-bold mb-3">Tech & Devlopment</p>
        <div className='flex justify-center mb-2'><a href="https://www.linkedin.com/company/life-sculptor/"><Image src={life} width={80} height={10} alt='life sculptor' className="rounded-full border-basic border-2"/></a></div>
        <p className="text-xl mb-1"><a href="https://www.linkedin.com/company/life-sculptor/"> Life Sculptor </a></p>
        <p className=' text-xs mb-4'>Feb 2022 - Present</p>
        <p className=' text-lg'>Doing research about diffrent topics in copmuter science and web development.</p>
      </div>
      </div>
    </div>
  )
}
