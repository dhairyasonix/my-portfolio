import React from 'react'
import exp1Img from "../Utils/Images/exp1.svg";
import exp2Img from "../Utils/Images/exp2.svg";

const Experiance = () => {
    return (
        <div className="px-[6%]  pt-10 text-white">
            <div><h1
                className="text-4xl text-center font-bold">My
                <span className="text-coustomGreen"> work</span>
                <span className="text-pink-400"> experience</span>
            </h1></div>
            <div className="w-full mt-24 grid lg:grid-cols-4 grid-cols-1 gap-10">
                <div className="md:col-span-2 md:row-span-1 rounded-3xl  bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 hover:shadow-white/75 hover:shadow">
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-9 gap-2">
                        <img src={exp1Img} alt="" />
                        <div className="lg:ms-5"> <h1 className="text-start text-xl md:text-3xl font-bold">Jr Software Developer at Cognizant</h1>
                            <p className="text-start text-white/80 mt-3 font-semibold">Developed and maintained high-quality software solutions using .Net, HTML, CSS and JavaScript while collaborating with cross-functional teams to implement new features and optimize system performance.</p></div>

                    </div>
                </div><div className="md:col-span-2 md:row-span-1 rounded-3xl  bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 hover:shadow-white/75 hover:shadow">
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-9 gap-2">
                        <img src={exp2Img} alt="" />
                        <div className="lg:ms-5"> <h1 className="text-start text-xl md:text-2xl font-bold">
                            Frontend Developer & Hardware Engineer Internship at Ch Point</h1>
                            <p className="text-start text-white/80 mt-3 font-semibold">Developed and maintained high-quality software solutions using .Net, HTML, CSS and JavaScript while collaborating with cross-functional teams to implement new features and optimize system performance.</p></div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Experiance