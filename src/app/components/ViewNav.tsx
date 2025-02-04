import { useState } from 'react';
import ViewLoading from "@/app/components/ViewLoading";

interface NavbarProps{
    isWhite: boolean;
}

const ViewNav = ({isWhite}: NavbarProps) => {
    //Navbar Open
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    //Loading
    const [isLoad, setIsLoad] = useState(false);
    const handleClick = (url:string) => {
        setIsLoad(true)
        setTimeout(() => {
            window.location.href=url;
        }, 1000);
    };

    return (
        <>
            <ViewLoading load={isLoad}/>
            <div className={`flex justify-between w-full px-10 py-5 items-center ${isWhite? 'bg-white' : 'bg-black'}`}>
                <button onClick={() => handleClick("/")} className={`transition-all duration-[0.5s] ease-in font-bold text-3xl z-50 ${isNavOpen? (isWhite? 'text-white':'text-black') : (isWhite? 'text-black':'text-white')}`}>
                    {'{AS}'}
                </button>
                <button className="flex flex-col gap-1 z-50 opacity-60 hover:opacity-100 transition-all duration-[0.5s] ease-in" onClick={toggleNav}>
                    <div className={`w-[20px] h-[5px] rounded-md ${isNavOpen ? (isWhite? 'bg-white rotate-45 translate-y-1' : 'bg-black rotate-45 translate-y-1') : (isWhite? 'bg-black':'bg-white')} transition-all duration-[0.5s] ease-in`}></div>
                    <div className={`w-[20px] h-[4px] rounded-md ${isNavOpen ? (isWhite? 'bg-white -rotate-45 -translate-y-1' : 'bg-black -rotate-45 -translate-y-1') : (isWhite? 'bg-black':'bg-white')} transition-all duration-[0.5s] ease-in`}></div>
                </button>
                <div className={`${isWhite? 'bg-black text-gray-600' : 'bg-white text-gray-800'} flex justify-center items-center flex-col w-full fixed ${isNavOpen ? 'h-full' : 'h-0'} overflow-hidden z-40 top-0 left-0 transition-all duration-[0.5s] ease-in`}>
                    <button onClick={() => handleClick("/experiences")} className={`text-3xl md:text-7xl font-bold w-full text-center p-5 ${isWhite? 'hover:bg-white hover:text-black':'hover:text-white hover:bg-black'} transition-all duration-[0.3s] ease-in ${isNavOpen? 'translate-x-0':'translate-x-32'} scale-1 hover:scale-[1.1]`}>EXPERIENCES</button>
                    <button onClick={() => handleClick("/educations")} className={`text-3xl md:text-7xl font-bold w-full text-center p-5 ${isWhite? 'hover:bg-white hover:text-black':'hover:text-white hover:bg-black'} transition-all duration-[0.3s] ease-in ${isNavOpen? 'translate-x-0':'-translate-x-32'} scale-1 hover:scale-[1.1]`}>EDUCATIONS</button>
                    <button onClick={() => handleClick("/achivements")} className={`text-3xl md:text-7xl font-bold w-full text-center p-5 ${isWhite? 'hover:bg-white hover:text-black':'hover:text-white hover:bg-black'} transition-all duration-[0.3s] ease-in ${isNavOpen? 'translate-x-0':'translate-x-32'} scale-1 hover:scale-[1.1]`}>ACHIVEMENTS</button>
                    <button onClick={() => handleClick("/projects")} className={`text-3xl md:text-7xl font-bold w-full text-center p-5 ${isWhite? 'hover:bg-white hover:text-black':'hover:text-white hover:bg-black'} transition-all duration-[0.3s] ease-in ${isNavOpen? 'translate-x-0':'-translate-x-32'} scale-1 hover:scale-[1.1]`}>PROJECTS</button>
                </div>
            </div>
        </>
    );
}
export default ViewNav;