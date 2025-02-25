import React from 'react'
import gridImg from "../Utils/Images/grid.svg";
import vsCode from "../Utils/Images/b5.svg";

const About = () => {
  return (
    <div>
        <section className="mx-[6%]  text-white" id="about">
                        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20">
                            <div class="row-span-1 relative overflow-hidden rounded-3xl group bg-white/10 border  border-transparent p-10 transition-all duration-500 ease-in-out hover:border-coustomGreen hover:shadow-[0_0_10px_4px_theme('colors.coustomGreen')]  justify-between grid grid-cols-2 lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[38vh] backdrop-blur-sm">
                                <div className="col-span-1 ">
                                    <img
                                        className=" rounded-xl  transition duration-200 group-hover:translate-x-2"
                                        src="https://images.ctfassets.net/zmrtlfup12q3/4pOMIJ5RU4YfeoJCy2tVan/eea00f8d01fcd3798ced1293d557111b/01-Hero-1920-edit.gif?w=1120&fit=fill&f=center"
                                        alt="clickImg"
                                    />
                                </div>
                                <div className="ml-7 p-4  font-bold  col-span-1">
                                    <h1 className="text-4xl transition duration-200 group-hover:translate-x-2">
                                        I prioritize client collaboration, fostering open
                                        communication.
                                    </h1>
                                </div>
                            </div>
                            <div class="row-span-1 relative overflow-hidden rounded-3xl group  bg-white/10 border border-transparent px-10 transition-all duration-500 ease-in-out hover:border-coustomGreen hover:shadow-[0_0_10px_4px_theme('colors.coustomGreen')]  justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2  backdrop-blur-sm ">
                                <div className="m-6">
                                    {" "}
                                    <h2 className=" text-3xl font-bold transition duration-200 group-hover:translate-x-2">
                                        Tech enthusiast with a passion for development.
                                    </h2>{" "}
                                </div>
                            </div>

                            <div class="row-span-1 relative overflow-hidden rounded-3xl px-10 group bg-white/10 border border-transparent  transition-all duration-500 ease-in-out hover:border-coustomGreen hover:shadow-[0_0_10px_4px_theme('colors.coustomGreen')] justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2  backdrop-blur-sm lg:max-h-[18vh]">
                                <div className="m-6">
                                    {" "}
                                    <h2 className=" text-3xl font-bold transition duration-200 group-hover:translate-x-2">
                                        I'm very flexible with time zone communications
                                    </h2>{" "}
                                </div>
                            </div>
                            <div class="row-span-1 relative overflow-hidden rounded-3xl group  bg-white/10 border border-transparent transition-all duration-500 ease-in-out hover:border-coustomGreen hover:shadow-[0_0_10px_4px_theme('colors.coustomGreen')] justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-1 backdrop-blur-sm lg:max-h-[20vh]">
                                <div className="w-full">
                                    <img
                                        className="w-full  justify-center opacity-80 "
                                        src="https://i.makeagif.com/media/9-10-2022/1JKodO.gif"
                                        alt="nural"
                                    />
                                </div>
                                <div className=" p-4 ml-10 absolute top-0 group-hover:translate-x-2">
                                    {" "}
                                    <h2 className=" text-3xl font-bold transition duration-200 group-hover:translate-x-2">
                                        I'm very flexible with time zone communications
                                    </h2>{" "}
                                </div>
                            </div>
                            <div class="row-span-1 relative overflow-hidden rounded-3xl group bg-white/10 border border-transparent p-4 transition-all duration-500 ease-in-out hover:border-coustomGreen hover:shadow-[0_0_10px_4px_theme('colors.coustomGreen')] justify-between flex flex-col space-y-4 md:col-span-3 md:row-span-2 backdrop-blur-sm lg:max-h-[48vh]">
                                <div className="w-full relative">
                                    <img
                                        className=" absolute ml-52 p-20 top-0 z-20"
                                        src={vsCode}
                                        alt="vsCode"
                                    />
                                </div>
                                <div className=" px-10 py-16 mr-[55%] absolute group-hover:translate-x-2">
                                    <h4>The Inside Scoop</h4>
                                    <h2 className=" text-3xl font-bold transition duration-200 ">
                                        Currently trying to dig deep into some amazing React Js
                                        features
                                    </h2>{" "}
                                </div>
                            </div>
                            <div class="row-span-1 relative overflow-hidden rounded-3xl p-10 group bg-white/10 border border-transparent  transition-all duration-500 ease-in-out hover:border-coustomGreen hover:shadow-[0_0_10px_4px_theme('colors.coustomGreen')] justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-1 backdrop-blur-sm lg:max-h-[22vh]">
                                <div className="w-full">
                                    <img
                                        className="w-full opacity-80 "
                                        src={gridImg}
                                        alt="nural"
                                    />
                                </div>
                                <div className="pt-6 absolute top-0 group-hover:translate-x-2">
                                    {" "}
                                    <h2 className=" text-3xl font-bold transition duration-200 group-hover:translate-x-1">
                                        Do you want to start a project together?
                                    </h2>{" "}
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default About