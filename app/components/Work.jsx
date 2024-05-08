import Image from "next/image"
import coolfun from "../assets/coolfun.gif"

export default function Work() {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 gap-5 p-4 lg:p-6" id="work">
            <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
            <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
            </div>
            <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
            <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
            </div>
            <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
            <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
            </div>
            <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
            <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
            </div>
            <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
            <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
            </div>
            <div className="bg-white h-[700px] flex items-center justify-center overflow-hidden">
            <Image src={coolfun} alt="cateating dance" className="object-cover hover:scale-125 transition-all duration-1000 ease-in-out" width={500} />
            </div>
        </div>
    )
}