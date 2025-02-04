"use client";

import { useEffect, useState } from "react";
import ViewNav from "@/app/components/ViewNav";
import ViewFoot from "@/app/components/ViewFoot";
import ViewLoading from "@/app/components/ViewLoading";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

export default function Achivements() {
  const isMd = useMediaQuery({ minWidth: 768 });
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/achivements")
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }, []);
    
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
        <div className="bg-black">
        <ViewLoading load={loading} />
        <ViewNav isWhite={false} />
        <div className="px-20 w-full md:h-[100vh] bg-black flex justify-center md:items-center py-44 md:py-0">
            <h1 className="text-5xl md:text-9xl font-bold text-white text-end">
              Achievements That Define My Journey
            </h1>
        </div>
        <ParallaxProvider>
            {data.map((item: any) => (
                <div className="bg-black w-full h-[80vh] md:h-[100vh] overflow-hidden p-20 relative" key={item.id}>
                    <h1 className={`text-5xl md:text-8xl font-bold text-gray-800 ${item.id % 2? 'text-start':'text-end'}`}>
                        {item.title}
                    </h1>
                    <Parallax
                        translateX={item.id % 2? (isMd ? [300, -250] : [300, -500]) : [-300, 350]}
                        translateY={[0, 0]}
                        className="w-full h-full top-0 flex gap-5 absolute"
                    >
                        <a href={`${item.link}`}
                        className="bg-center bg-cover mt-0 rounded overflow-hidden flex items-start md:items-end"
                        >
                          <img src={item.image} alt="" className="md:h-[80%] object-cover rounded md:m-auto" />
                        </a>
                    </Parallax>
                </div>
            ))}
        </ParallaxProvider>
        <ViewFoot />
        </div>
    );
}
