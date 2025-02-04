"use client";
interface LoadingProps {
    load: boolean;
}
const ViewLoading = ({ load } : LoadingProps) => {
    return (
        <div className={`flex items-center w-full fixed bg-gray-950 z-[60] text-white px-10 overflow-hidden ${load? 'h-full' : 'h-0'} bottom-0 left-0 transition-all duration-[0.5s] ease-in`}>
            <h1 className="text-6xl md:text-8xl font-bold animate-pulse">Almost there... <br /> just a few more bytes!</h1>
        </div>
    );
}
export default ViewLoading;