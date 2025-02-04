"use client";

import { useEffect, useState } from "react";
import ViewNav from "@/app/components/ViewNav";
import ViewFoot from "@/app/components/ViewFoot";
import ViewLoading from "@/app/components/ViewLoading";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Educations() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/educations")
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
        <div className="bg-white">
        <ViewLoading load={loading} />
        <ViewNav isWhite={true} />
        <div className="px-3 md:px-10 py-44 md:p-20 w-full h-[100vh] flex">
            <h1 className="text-6xl md:text-9xl font-bold">
                Lessons from the Classroom & Beyond
            </h1>
        </div>
        <ParallaxProvider>
            {data.map((item: any) => (
                <div className="w-full h-[100vh] overflow-hidden relative" key={item.id}>
                    <h1 className={`m-5 md:m-20 text-5xl md:text-7xl font-bold text-gray-800 ${item.id % 2? 'text-end':'text-start'}`}>
                        {item.title}
                    </h1>
                    <Parallax
                        translateY={[300, -300]}
                        translateX={[0,0]}
                        className={`w-full h-full top-0 flex absolute justify-center ${item.id % 2? 'md:justify-start':'md:justify-end'}`}
                    >
                        <div
                        className="border border-gray-800 w-11/12 md:w-[60%] h-[80%] bg-center bg-cover md:mx-20 rounded overflow-hidden flex items-end md:justify-end"
                        style={{ backgroundImage: `url('${item.image}')` }}
                        >
                        <div className="w-full md:w-7/12 bg-[rgba(0,0,0,0.9)] h-[45%] md:h-full text-white flex justify-center flex-col px-3 md:px-10 gap-3">
                            <h2 className="text-2xl md:text-6xl font-bold">{item.title}</h2>
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
