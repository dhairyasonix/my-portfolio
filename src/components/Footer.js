import React from 'react'
import gitImg from '../Utils/Images/git.svg'
import linkImg from '../Utils/Images/link.svg'
import instaImg from '../Utils/Images/insta.svg'

const Footer = () => {
    return (
        <footer id='contact' className='mt-24'>
            <div className="px-[6%] pt-10 text-white text-center">
                <div className=' items-center'>
                    <h1 className='text-4xl text-center font-bold px-[28%]'>Stop Searching You have <span className='text-coustomGreen'> Found </span> the <span className='text-pink-400'>Right Developer!</span></h1>
                    <p className='font-semibold px-[19%] m-8 text-white/80'>With expertise in cutting-edge web development, I create seamless digital experiences that drive results. Get in touch now, and let's make it happen!</p>
                    <div className='flex justify-center'>
                        <a href="mailto:sonidhairya160@gmail.com">
                            <button className="flex relative  items-center justify-center overflow-hidden text-xl bg-coustomGreenBg my-4 py-1 border  rounded-full shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-coustomGreen before:duration-500 before:ease-out hover:shadow-coustomGreen hover:before:h-72 hover:before:w-72 ">
                                {" "}
                                <span className="pl-5 relative z-10 text-lg">
                                    Let's Get in Touch
                                </span>
                                <img
                                    className="w-8 h-8 p-1 ml-2 mr-1  bg-white rounded-full relative z-10 "
                                    src="https://www.svgrepo.com/show/349679/arrow-up-right.svg"
                                    alt="visitIcon"
                                ></img>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='flex justify-between mt-28 p-10 items-center'>
                    <h3 className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Dhairya Soni</h3>
                    <div className='flex items-center md:gap-3 gap-6 justify-center'>
                        <div className='w-10 h-10 p-1 cursor-pointer rounded-lg flex justify-center items-center border border-black-300'>
                            <a target='_blank' rel="noreferrer" href='https://github.com/dhairyasonix'>
                                <img className='w-10  h-10' src={gitImg} alt='git' />
                            </a>

                        </div>
                        <div className='w-10 h-10 p-1 cursor-pointer rounded-lg flex justify-center items-center border border-black-300'>
                            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/dhairya160'>
                                <img className='w-10  h-10' src={linkImg} alt='git' />
                            </a>

                        </div>
                        <div className='w-10 h-10  cursor-pointer rounded-lg flex justify-center items-center border border-black-300'>
                            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/sketch.yard'>
                                <img className='w-10  h-10' src={instaImg} alt='git' />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer