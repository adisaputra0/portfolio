"use client";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

const ViewFoot = () => {
    const isMd = useMediaQuery({ minWidth: 768 });
    return (
        <>
            
            <ParallaxProvider>
                {/* Contact */}
                <div className="h-[100vh] bg-black flex flex-col md:flex-row overflow-hidden p-5 gap-20 md:p-0 md:gap-0">
                <div className="text-white md:w-1/2 h-full flex justify-center items-end md:items-center flex-col z-10">
                    <Parallax {...(isMd ? { translateX: [-100, 120]} : { translateY: [-100, 100] })} className="md:pt-52 w-full h-full flex items-end md:items-center">
                    <h2 className="font-bold text-4xl md:text-5xl mb-2">LET'S CHAT! IF THERE IS ANYTHING YOU WANT TO ASK OR TALK ABOUT, JUST CONTACT ME. WAITING!</h2>
                    </Parallax>
                </div>
                <div className="text-white md:w-1/2 h-full flex md:justify-end">
                    <Parallax {...(isMd ? { translateX: [100, -180]} : { translateY: [100, -50] })} className="md:pt-52 flex flex-col md:justify-center md:text-end">
                    <a href="https://www.instagram.com/saputra.adii01/" className="font-bold  text-3xl md:text-5xl mb-2 underline underline-offset-8">INSTAGRAM</a>
                    <a href="https://www.linkedin.com/in/i-putu-adi-saputra/" className="font-bold  text-3xl md:text-5xl mb-2 underline underline-offset-8">LINKEDIN</a>
                    <a href="https://github.com/adisaputra0" className="font-bold  text-3xl md:text-5xl mb-2 underline underline-offset-8">GITHUB</a>
                    </Parallax>
                </div>
                </div>
                <div className="flex flex-col justify-center p-5 bg-black text-white gap-2">
                    <hr className="w-full" />
                    <p className="text-center">© 2025 Adi Saputra. All Rights Reserved.</p>
                </div>
            </ParallaxProvider>
        </>
    );
}
export default ViewFoot;