import Image from "next/image"
import Link from "next/link"

import pic1 from "../assets/1.png"
import pic2 from "../assets/2.png"
import pic3 from "../assets/3.png"
import pic4 from "../assets/4.png"
import pic5 from "../assets/5.png"
import pic6 from "../assets/6.png"

export default function Work() {
    return (
        <div className="container mx-auto p-4 w-full grid lg:grid-cols-2 gap-5 lg:p-6" id="work">
            <Link target="_blank" href="https://gawston.github.io/parallax-web/" className="flex items-center justify-center overflow-hidden">
                <Image src={pic1} alt="cateating dance" className="hover:scale-125 transition-all duration-[2000ms] ease-in-out" width={750} />
            </Link>
            <Link target="_blank" href="https://gawston.github.io/coffeehub" className="flex items-center justify-center overflow-hidden">
                <Image src={pic2} alt="cateating dance" className="hover:scale-125 transition-all duration-[2000ms] ease-in-out" width={750} />
            </Link>
            <Link target="_blank" href="https://gawston.github.io/random-box/" className="flex items-center justify-center overflow-hidden">
                <Image src={pic3} alt="cateating dance" className="hover:scale-125 transition-all duration-[2000ms] ease-in-out" width={750} />
            </Link>
            <Link target="_blank" href="https://gawston.github.io/TodoApp/" className="flex items-center justify-center overflow-hidden">
                <Image src={pic4} alt="cateating dance" className="hover:scale-125 transition-all duration-[2000ms] ease-in-out" width={750} />
            </Link>
            <Link target="_blank" href="https://gawston.github.io/game-a-rai-wa/" className="flex items-center justify-center overflow-hidden">
                <Image src={pic5} alt="cateating dance" className="hover:scale-125 transition-all duration-[2000ms] ease-in-out" width={750} />
            </Link>
            <Link target="_blank" href="https://gawston.github.io/true-or-false/" className="flex items-center justify-center overflow-hidden">
                <Image src={pic6} alt="cateating dance" className="hover:scale-125 transition-all duration-[2000ms] ease-in-out" width={750} />
            </Link>
        </div>
    )
}