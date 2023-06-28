import logo from '../public/Logo.png'
import menu from '../public/menu.svg'
import close from '../public/close.svg'
import Image from 'next/image'
import {useState} from "react"

function Nav() {
    const [Menu, setMenu] = useState(false)
    return (
        <div>
        <nav className=" px-12 w-full h-[70px] bg-primary flex justify-between items-center sm:px-3">
            <div className=' h-full w-[70px]'>
                <Image src={logo} alt='logo' height="0" width="0"  />
            </div>
            <ul className=" w-3/5 h-5 flex justify-evenly items-center text-secondary font-bold text-lg md:hidden">
                <li><a href='#about' className='hover:text-basic'> About me </a></li>
                <li><a href='#skills' className='hover:text-basic'>Skills</a></li>
                <li><a href='#experience' className='hover:text-basic'> Experience </a></li>
                <li><a href='#projects' className='hover:text-basic'> Projects </a></li>
                <li><a href='#volunteer' className='hover:text-basic'> Volunteering</a></li>
                <li><a href='#contact' className='hover:text-basic'> Contact me </a></li>

            </ul>
            {Menu? <div 
            className=' hidden md:inline-block'
            onClick={()=>setMenu(false)}>
           <Image alt='clode' src={close}/>
            </div>:<div 
            className=' hidden md:inline-block'
            onClick={()=>setMenu(true)}>
            <Image alt='menu' src={menu}/>
            </div>}
            
        </nav>
        {Menu ? (
            <div className='w-full h-64 bg-primary text-secondary flex py-2'>
                <ul className="w-full flex flex-col items-center text-secondary font-bold text-lg">
                <li><a href='#about' className='hover:text-basic'> About me </a></li>
                <li><a href='#skills' className='hover:text-basic'>Skills</a></li>
                <li><a href='#experience' className='hover:text-basic'> Experience </a></li>
                <li><a href='#projects' className='hover:text-basic'> Projects </a></li>
                <li><a href='#volunteer' className='hover:text-basic'> Volunteering</a></li>
                <li><a href='#contact' className='hover:text-basic'> Contact me </a></li>
                </ul>
                 </div>
        ): null}
        </div>
    )
}

export default Nav
