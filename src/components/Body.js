import React from "react";
import { Link } from "react-scroll";
// import homeBg from "../Utils/Images/bg.png";
import MetalBg from "../Utils/Images/femaleRobo.png";
import webProg from "../Utils/Images/coding.png";




import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Experiance from "./Experiance";
import Footer from "./Footer"
import AnimatedCircle from "./AnimatedCircle";

const Body = () => {
    return (
        <div className=" w-full h-full">
            <div className="relative w-full">
                <AnimatedCircle />
                <Header />
                <div className="relative w-full h-full ">
                    {/* <img
                        className=" lg:w-full h-full object-cover"
                        src={homeBg}
                        alt="HomeBg"
                    /> */}
                    <img
                        className=" absolute top-0 left-0  w-full -z-10 "
                        src={MetalBg}
                        alt="HomeBg"
                    />
                    <div id="home" className=" absolute top-0 left-0 pt-[13%] px-[9%] text-white z-20  lg:text-7xl ">
                        <h3 className="font-iDroid ">
                            Dhai<span className="text-pink-400">r</span>ya
                        </h3>
                        <div className="flex">
                            <img
                                className="w-14 h-14  mt-3 invert brightness-0"
                                src={webProg}
                                alt="progIcon"
                            ></img>
                            <h3 className="ml-11 font-iDroid ">
                                Fr<span className="text-coustomGreen">o</span>ntend
                            </h3>
                        </div>
                        <h3 className="font-iDroid ">
                            d<span className="text-pink-400">e</span>vel
                            <span className="text-coustomGreen">o</span>per
                        </h3>
                        <div className="my-6 w-[70%]">
                            {" "}
                            <h2 className="text-3xl">
                                Transforming Concepts into Seamless User Experiences.
                            </h2>
                        </div>
                        <div className="">
                            <button className="flex relative   items-center justify-center overflow-hidden text-xl bg-coustomGreenBg my-4 py-1 border  rounded-full shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-coustomGreen before:duration-500 before:ease-out hover:shadow-coustomGreen hover:before:h-72 hover:before:w-72 ">
                                {" "}
                                <Link  className="pl-5 relative z-10" to="projects" smooth={true} offset={-30} duration={1000}>
                                    Take a look at my work
                                </Link>
                                <img
                                    className="w-8 h-8 p-1 ml-2 mr-1  bg-white rounded-full relative z-10 "
                                    src="https://www.svgrepo.com/show/349679/arrow-up-right.svg"
                                    alt="visitIcon"
                                ></img>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute mt-[45%] top-[27%] w-full ">
                    <About />
                    <Projects />
                    <Experiance />
                    <Footer />

                </div>
            </div>
        </div>
    );
};

export default Body;
