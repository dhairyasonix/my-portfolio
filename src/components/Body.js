import React from 'react'
import homeBg from "../Utils/Images/homeBg.png"
import MetalBg from "../Utils/Images/femaleRobo.png"
import webProg from "../Utils/Images/coding.png"
import Header from './Header'

const Body = () => {
    return (
        <div className='bg-customBlack'>
            <div className='relative '>
                <Header />
                <div className='relative w-full h-full'>
                    <img className=' w-full h-full object-cover' src={homeBg} alt='HomeBg' />
                    <img className=' absolute top-0 left-0  w-full h-full ' src={MetalBg} alt='HomeBg' />
                    <div className='absolute top-0 left-0 pt-[13%] px-[9%] text-white z-10'>
                        <h3 className='font-iDroid text-7xl'>Dhai<span className='text-pink-400'>r</span>ya</h3>
                        <div className='flex'>
                            <img className='w-14 h-14  mt-3 invert brightness-0' src={webProg} alt='progIcon'></img>
                            <h3 className='ml-11 font-iDroid text-7xl'>Fr<span className='text-coustomGreen'>o</span>ntend</h3>
                        </div>
                        <h3 className='font-iDroid text-7xl'>d<span className='text-pink-400'>e</span>vel<span className='text-coustomGreen'>o</span>per</h3>
                        <div className='my-6 w-[70%]'> <h2 className='text-3xl'>Transforming Concepts into Seamless User Experiences.</h2>
                        </div>
                        <div className=''>
                            <button className='flex relative   items-center justify-center overflow-hidden text-xl bg-coustomGreenBg my-4 py-1 border  rounded-full shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-coustomGreen before:duration-500 before:ease-out hover:shadow-coustomGreen hover:before:h-72 hover:before:w-72 '> <span className='pl-5 relative z-10'>Take a look at my work</span>
                                <img className='w-8 h-8 p-1 ml-2 mr-1  bg-white rounded-full relative z-10 ' src='https://www.svgrepo.com/show/349679/arrow-up-right.svg' alt='visitIcon'></img>

                            </button>
                        </div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-customBlack to-transparent"></div>

                </div>

                <section className='mx-[6%]' id='about'>
                    <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20'>
                        <div class="row-span-1 relative overflow-hidden rounded-3xl border  group/bento hover:shadow-lg hover:shadow-coustomGreen transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]">
                            <h2>CARD</h2>
                        </div>
                        <div class="row-span-1 relative overflow-hidden rounded-3xl border  hover:shadow-lg hover:shadow-coustomGreen  transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2 ">
                            <div className='h-full'> <h2 className='w-full h-full'>CARD</h2> </div>
                        </div>

                        <div class="row-span-1 relative overflow-hidden rounded-3xl border hover:shadow-lg hover:shadow-coustomGreen transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2 ">
                            <div className='h-full'> <h2 className='w-full h-full'>CARD</h2> </div>
                        </div>
                        <div class="row-span-1 relative overflow-hidden rounded-3xl border hover:shadow-lg hover:shadow-coustomGreen transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-1 ">
                            <div className='h-full'> <h2 className='w-full h-full'>CARD</h2> </div>
                        </div>
                        <div class="row-span-1 relative overflow-hidden rounded-3xl border hover:shadow-lg hover:shadow-coustomGreen transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 md:col-span-3 md:row-span-2">
                            <div className='h-full '> <h2 className='w-full h-full'>CARD</h2> </div>
                        </div>
                        <div class="row-span-1 relative overflow-hidden rounded-3xl border hover:shadow-lg hover:shadow-coustomGreen transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-1">
                            <div className='h-full'> <h2 className='w-full h-full'>CARD</h2> </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Body