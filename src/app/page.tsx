"use client";

import ViewNav from "@/app/components/ViewNav";
import ViewFoot from "@/app/components/ViewFoot";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import ViewLoading from "@/app/components/ViewLoading";
import { useEffect, useState } from "react";

export default function Home() {
  const isMd = useMediaQuery({ minWidth: 768 });

  //Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStop = () => setLoading(false);
    handleStop();
    window.addEventListener("load", handleStop);
    return () => {
      window.removeEventListener("load", handleStop);
    };
  }, []);
  return (
    <>
      <ViewLoading load={loading}/>
      <ViewNav isWhite={true} />
      <ParallaxProvider>
        {/* Home */}
        <div className="w-full h-[100vh] flex justify-center items-start md:items-center pt-32 md:pt-0 relative overflow-hidden">
          <Parallax translateY={isMd ? [-100, 100] : [-100, 50]}>
            <div className=" w-full md:w-max flex justify-center flex-col px-2 md:px-0">
              <div className="flex justify-end w-full">
                <h3 className=" text-3xl md:text-6xl font-bold">INFORMATICS</h3>
              </div>
              <div className="flex justify-between w-full">
                <h3 className=" text-3xl md:text-6xl">I Putu</h3>
                <h3 className=" text-3xl md:text-6xl">& FREELANCE</h3>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="text-[5rem] md:text-[10rem] font-bold leading-none">ADI SAPUTRA</h1>
              </div>
              <div className="flex justify-between w-full">
                <h3 className=" text-[0.7rem] md:text-[1rem]">"coding dulu, tidur <br className="md:hidden" /> belakangan"</h3>
                <p className=" text-[0.7rem] md:text-[1rem] underline underline-offset-8">Medallion for Excellence</p>
              </div>
            </div>
          </Parallax>
          <img src="img/profile.png" alt="" className=" w-full md:w-[30%] absolute left-auto right-auto bottom-0"/>
        </div>
        
        {/* Slogan */}
        <div className="h-[100vh] bg-black flex flex-col md:flex-row overflow-hidden">
          <div className=" md:w-1/2 h-[35%] md:h-full flex justify-center items-end md:items-center flex-col z-10">
            <Parallax {...(isMd ? { translateY: [100, -200] } : { translateX: [-100, 60] })} className="w-[300%] md:w-full h-full">
              <img src="img/img-1.jpg" alt="" className="w-full h-full md:h-[300%] object-cover"/>
            </Parallax>
          </div>
          <div className="text-white md:w-1/2 h-full p-10 flex md:justify-center flex-col">
            <Parallax {...(isMd ? { translateY: [-100, 100] } : { translateX: [100, -200] })}>
              <h2 className="font-bold text-4xl md:text-5xl mb-2">I CAN HELP YOUR BUSINESS GET ONLINE AND GROW FAST</h2>
              <p className="md:text-justify">I create modern, user-friendly websites that showcase your brand, attract customers, and drive growth. From seamless integrations to stunning designs, I’ll help your business thrive online.</p>
            </Parallax>
          </div>
        </div>
        
        {/* About */}
        <div className="h-[100vh] grid grid-cols-none md:grid-cols-2 grid-rows-none md:grid-rows-2 overflow-hidden">
          <div className=" h-full flex justify-center items-end md:items-center flex-col z-10 order-2">
            <Parallax {...(isMd ? { translateY: [-200, 100] } : { translateX: [-100, -50] })} className="w-[150%] md:w-full h-full flex">
              <img src="img/img-3.jpg" alt="" className="w-full h-full md:h-[300%] object-cover"/>
              <img src="img/img-3.jpg" alt="" className="w-full h-full md:h-[300%] object-cover"/>
            </Parallax>
          </div>
          <div className="h-full p-10 flex md:justify-center items-center flex-col order-1">
            <Parallax {...(isMd ? { translateY: [100, 10] } : { translateX: [100, -70] })}>
              <h2 className="font-bold text-3xl md:text-6xl mb-5">MEET THE HUMAN BEHIND THE KEYBOARD</h2>
              <p className="md:text-justify">Hey, I’m I Putu Adi Saputra, a freelance full-stack web developer. I build websites that are both functional and user-friendly, from the front-end to the back-end. Always learning and coding to create the best digital experiences!</p>
            </Parallax>
          </div>
        </div>
      </ParallaxProvider>
      {/* Footer */}
      <ViewFoot />
    </>
  );
}
