"use client";

import { useEffect, useState } from "react";
import ViewNav from "@/app/components/ViewNav";
import ViewFoot from "@/app/components/ViewFoot";
import ViewLoading from "@/app/components/ViewLoading";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Experiences() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/experiences")
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
        <div className="px-20 w-full h-[100vh] bg-black flex justify-center items-center">
            <h1 className="text-5xl md:text-8xl font-bold text-white">
            A Journey Through Code, Creativity & Challenges
            </h1>
        </div>
        <ParallaxProvider>
            {data.map((item: any) => (
                <div className="bg-black w-full h-[100vh] overflow-hidden p-20 relative" key={item.id}>
                    <h1 className={`text-5xl md:text-8xl font-bold text-gray-800 ${item.id % 2? 'text-end':'text-start'}`}>
                        {item.title}
                    </h1>
                    <Parallax
                        translateX={item.id % 2? [-300, 350]:[300, -350]}
                        translateY={[0, 0]}
                        className="w-full h-full top-0 flex gap-5 absolute"
                    >
                        <div
                        className="border border-gray-800 w-11/12 md:w-[60%] h-[80%] bg-center bg-cover mt-0 rounded overflow-hidden flex items-end"
                        style={{ backgroundImage: `url('${item.image}')` }}
                        >
                        <div className="w-full md:w-6/12 bg-[rgba(0,0,0,0.9)] h-[45%] md:h-full text-white flex justify-center flex-col px-3 md:px-10 gap-3">
                            <h2 className="text-2xl md:text-7xl font-bold">{item.title}</h2>
                            <p className="text-[0.8rem] md:text-[1rem] font-semibold">{item.as} | {item.location}</p>
                            <p className="text-[0.8rem] md:text-[1rem] text-justify">
                                {item.content}
                            </p>
                        </div>
                        </div>
                    </Parallax>
                </div>
            ))}
        </ParallaxProvider>
        <ViewFoot />
        </div>
    );
}
