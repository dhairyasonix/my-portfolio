import React from 'react'
import { Link } from 'react-scroll'
import AiChatBar from './AiChatBar'

const Header = () => {

    return (<div>
        <nav className='absolute w-full py-3 px-5'>


            <div className='flex items-center justify-between relative z-30'>
                <h2 className='font-iDroid text-3xl m-2 p-2 justify-start'>
                    <span className='text-coustomGreen'>D</span>
                    <span className='text-pink-400'>S</span>
                </h2>
                <div className='flex items-center gap-[1vw] justify-center text-lg'>
                    <Link className='px-2 cursor-pointer' to="about" smooth={true} offset={30} duration={500}  >About</Link>
                    <Link className='px-2 cursor-pointer' to="projects" smooth={true} offset={-30} duration={900}  >Project</Link>
                    <Link className='px-2 cursor-pointer' to="contact" smooth={true} offset={30} duration={1000}  >Contact</Link>
                    
                </div>
                <div className='items-center gap-[1vw] justify-end'>
                <Link className='px-2 cursor-pointer' href='' >Contact</Link>
                </div>
            </div>
        </nav>
        <AiChatBar/>
        </div>
    )
}

export default Header