export default function Hero() {
    return (
        <div className="container min-h-screen mx-auto flex flex-col justify-center items-center text-center">
            <p className="text-6xl md:text-8xl lg:text-[10rem] font-semibold">
            {/* Web developer and Graphic designer. */}
            Naruenat <br /> Khamwaree
            </p>
            <p className="text-xl md:text-3xl">
                {/* Web Developer */}
                yang mai sej najub
            </p>
            <div className="absolute bottom-12 flex flex-col items-center">
            <div className="-space-y-5 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <p className="text-xl">Scroll down</p>
            </div>
        </div>
    )
}