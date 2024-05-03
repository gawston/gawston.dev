import Link from "next/link"

export default function Home() {
  return (
    <>
    <div className="container min-h-[90vh] mx-auto flex flex-col items-center justify-center">
      <p className="text-8xl">gawston.dev</p>
      <p className="text-3xl">Developer & Graphic design</p>
    </div>
    <div className="border-2 container min-h-screen mx-auto flex flex-col items-center justify-center" id="work">
      <p className="text-5xl">work section</p>
    </div>
    <div className="border-2 container min-h-screen mx-auto flex flex-col items-center justify-center" id="contact">
      <p className="text-5xl">contact section</p>
    </div>
    </>
  )
}
