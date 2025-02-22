import React from 'react'
import netflixGpt from "../Utils/Images/netflixGpt.png";
import reactImg from "../Utils/Images/React.svg";
import tailwindImg from "../Utils/Images/Tailwind.svg";
import firebaseIMg from "../Utils/Images/Firebase.svg";
import reduxImg from "../Utils/Images/Redux.svg";
import vercelImg from "../Utils/Images/Vercel.svg";
import Ytube from "../Utils/Images/Ytube.png";

const Projects = () => {
  return (
    <div className="px-[6%] pt-10  text-white ">
      <h1
        className="text-4xl text-center font-bold
                        "
      >
        {" "}
        A small <span className="text-coustomGreen">selection</span> of
        recent<span className="text-pink-400"> projects</span>
      </h1>
      <div className="p-16 flex flex-col  lg:flex-row justify-center">

        <a className="m-8"
          href="https://y-tube-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" w-96 p-4 rounded-3xl bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 hover:shadow-white/75 hover:shadow cursor-alias">
            <div>
              <img
                className="rounded-2xl"
                src={Ytube}
                alt="netflix"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold"> Ytube </h3>
              <p className="py-1">
                A YouTube-inspired video streaming app built with React, Redux, and Tailwind CSS, featuring real-time search, optimized performance, and an immersive viewing experience.
              </p>
            </div>
            <div className="flex items-center justify-between mt-3 mb-3">
              <div className="flex items-center cursor-default">
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-1 transform translate-x-[-2px]"
                  src={reactImg}
                  alt="reactImg"
                />
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-2 transform translate-x-[-9px] "
                  src={reduxImg}
                  alt="reduxImg"
                />
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-1 transform translate-x-[-16px]"
                  src={tailwindImg}
                  alt="tailwindImg"
                />
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-1 transform translate-x-[-23px] drop-shadow "
                  src={vercelImg}
                  alt="firebaseIMg"
                />
              </div>
              <div className="mr-3 cursor-pointer p-1">
                <a
                  className="justify-center "
                  href="https://github.com/dhairyasonix/YTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Check Github Link</p>
                </a>
              </div>
            </div>
          </div>
        </a>
        <a className="m-8"
          href="https://dhairyasonix.github.io/netflix-gpt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" w-96 p-4 rounded-3xl bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 hover:shadow-white/75 hover:shadow cursor-alias">
            <div>
              <img
                className="rounded-2xl"
                src={netflixGpt}
                alt="netflix"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold"> CINEFLIX-GPT </h3>
              <p className="py-1">
                A Netflix-inspired, AI-powered movie recommendation app
                built with React, Redux, Firebase, and Hugging Face to
                deliver an intelligent and immersive streaming experience.
              </p>
            </div>
            <div className="flex items-center justify-between mt-3 mb-3">
              <div className="flex items-center cursor-default">
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-1 transform translate-x-[-2px]"
                  src={reactImg}
                  alt="reactImg"
                />
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-2 transform translate-x-[-9px] "
                  src={reduxImg}
                  alt="reduxImg"
                />
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-1 transform translate-x-[-16px]"
                  src={tailwindImg}
                  alt="tailwindImg"
                />
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-1 transform translate-x-[-23px]"
                  src={firebaseIMg}
                  alt="firebaseIMg"
                />
              </div>
              <div className="mr-3 cursor-pointer p-1">
                <a
                  className="justify-center "
                  href="https://github.com/dhairyasonix/netflix-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Check Github Link</p>
                </a>
              </div>
            </div>
          </div>
        </a>
        <a className="m-8"
          href="https://dhairyasonix.github.io/netflix-gpt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" w-96 p-4 rounded-3xl bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 hover:shadow-white/75 hover:shadow cursor-alias">
            <div>
              <img
                className="rounded-2xl"
                src={netflixGpt}
                alt="netflix"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold"> CINEFLIX-GPT </h3>
              <p className="py-1">
                A Netflix-inspired, AI-powered movie recommendation app
                built with React, Redux, Firebase, and Hugging Face to
                deliver an intelligent and immersive streaming experience.
              </p>
            </div>
            <div className="flex items-center justify-between mt-3 mb-3">
              <div className="flex items-center cursor-default">
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-1 transform translate-x-[-2px]"
                  src={reactImg}
                  alt="reactImg"
                />
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-2 transform translate-x-[-9px] "
                  src={reduxImg}
                  alt="reduxImg"
                />
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-1 transform translate-x-[-16px]"
                  src={tailwindImg}
                  alt="tailwindImg"
                />
                <img
                  className="border border-white/[0.2] rounded-full bg-customBlack w-10 h-10 p-1 transform translate-x-[-23px]"
                  src={firebaseIMg}
                  alt="firebaseIMg"
                />
              </div>
              <div className="mr-3 cursor-pointer p-1">
                <a
                  className="justify-center "
                  href="https://github.com/dhairyasonix/netflix-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Check Github Link</p>
                </a>
              </div>
            </div>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Projects