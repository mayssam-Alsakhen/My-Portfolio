import logo from '../public/Logod.png'
import Image from 'next/image'
import {useState} from "react"

function Nav() {
    const [Menu, setMenu] = useState(false)
    return (
        <div>
        <nav className=" px-12 w-full h-[70px] bg-primary flex justify-between items-center">
            <div className=' h-full w-[70px]'>
                <Image src={logo} alt='logo' height="0" width="0"  />
            </div>
            <div className=" w-3/5 h-5 flex justify-evenly items-center text-secondary font-bold text-lg">
                <span><a href='#about' className='hover:text-basic'> About me </a></span>
                <span><a href='#skills' className='hover:text-basic'>Skills</a></span>
                <span><a href='#experience' className='hover:text-basic'> Experience </a></span>
                <span><a href='#projects' className='hover:text-basic'> Projects </a></span>
                <span><a href='#volunteer' className='hover:text-basic'> Volunteering</a></span>
                <span><a href='#contact' className='hover:text-basic'> Contact me </a></span>

            </div>
        </nav>
        
        {Menu ? (
            <div className='w-2/4 h-full bg-primary text-secondary'> eeeee</div>
        ): null}
        </div>
    )
}

export default Nav
