import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-50">
      <div className="container mx-auto py-4 px-4 md:px-0">
        <div className="flex justify-between content-center">
          <div className="">Pattraco</div>
          <button onClick={() => setIsOpen((prevValue) => !prevValue)}>
            <span className="block relative w-6 h-1 rounded-sm bg-black"></span>
            <span className="block relative w-6 h-1 rounded-sm bg-black mt-1"></span>
            <span className="block relative w-6 h-1 rounded-sm bg-black mt-1"></span>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'scale-x-100 origin-top-right' : 'origin-top-right scale-x-0'
        } absolute h-screen flex left-0 font-sans top-0 duration-300 flex-col transition justify-center w-full items-center bg-black text-white z-50`}
      >
        <button
          onClick={() => setIsOpen((prevValue) => !prevValue)}
          className="absolute top-10 right-24 text-4xl font-bold hover:scale-125 transition"
        >
          X
        </button>
        <div className="text-5xl font-extralight py-2">
          <Link href="/">
            <>
              Solar - <span className="font-normal">Sun Infinity</span>
            </>
          </Link>
        </div>
        <div className="text-5xl font-extralight py-2">
          <Link href="/">
            <>
              Earth-Mined Goodness - <span className="font-normal">ZAYAA</span>
            </>
          </Link>
        </div>
        <div className="text-5xl font-extralight py-2">
          <Link href="/">
            <>
              FMCG Retail - <span className="font-normal">Imperial Stores</span>
            </>
          </Link>
        </div>
        <div className="text-5xl font-extralight py-2">
          <Link href="/">
            <>
              Agro Technology - <span className="font-normal">SAIBARRELCO</span>
            </>
          </Link>
        </div>
        <div className="text-5xl font-extralight py-2">
          <Link href="/">
            <>
              CSR - <span className="font-normal">Your Soul Tribe</span>
            </>
          </Link>
        </div>
        <div className="text-5xl font-extralight py-2">
          <Link href="/">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
