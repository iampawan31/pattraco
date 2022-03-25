import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative h-12 z-50 border-b shadow md:border-none md:shadow-none">
      <div className="container h-full mx-auto px-4 md:px-0">
        <div className="flex h-full justify-between content-center items-center">
          <div className="relative h-6 w-12 md:h-12 md:w-28">
            <Image src={Logo} layout="fill" objectFit="cover" alt="Pattraco" />
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <div className="font-extralight hover:border-b hover:border-black uppercase transition-all">
                <Link href="/">Sun Infinity</Link>
              </div>
              <div className="font-extralight hover:border-b hover:border-black uppercase transition-all">
                <Link href="/">ZAYAA</Link>
              </div>
              <div className="font-extralight hover:border-b hover:border-black uppercase transition-all">
                <Link href="/">Imperial Stores</Link>
              </div>
              <div className="font-extralight hover:border-b hover:border-black uppercase transition-all">
                <Link href="/">SAIBARRELCO</Link>
              </div>
              <div className="font-extralight hover:border-b hover:border-black uppercase transition-all">
                <Link href="/">Your Soul Tribe</Link>
              </div>
              <div className="font-extralight hover:border-b hover:border-black uppercase transition-all">
                <Link href="/">Contact</Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen((prevValue) => !prevValue)}>
              <span className="block relative w-6 h-1 rounded-sm bg-black"></span>
              <span className="block relative w-6 h-1 rounded-sm bg-black mt-1"></span>
              <span className="block relative w-6 h-1 rounded-sm bg-black mt-1"></span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'scale-x-100 origin-top-right' : 'origin-top-right scale-x-0'
        } absolute h-screen flex left-0 font-sans top-0 duration-300 flex-col transition justify-center w-full items-center bg-white text-black z-50`}
      >
        <button
          onClick={() => setIsOpen((prevValue) => !prevValue)}
          className="absolute top-5 right-5 md:top-10 md:right-24 text-4xl font-bold hover:scale-125 transition"
        >
          X
        </button>
        <div className="text-xl font-extralight py-2">
          <Link href="/">
            <>
              Solar - <span className="font-normal">Sun Infinity</span>
            </>
          </Link>
        </div>
        <div className="text-xl font-extralight py-2">
          <Link href="/">
            <>
              Earth-Mined Goodness - <span className="font-normal">ZAYAA</span>
            </>
          </Link>
        </div>
        <div className="text-xl font-extralight py-2">
          <Link href="/">
            <>
              FMCG Retail - <span className="font-normal">Imperial Stores</span>
            </>
          </Link>
        </div>
        <div className="text-xl font-extralight py-2">
          <Link href="/">
            <>
              Agro Technology - <span className="font-normal">SAIBARRELCO</span>
            </>
          </Link>
        </div>
        <div className="text-xl font-extralight py-2">
          <Link href="/">
            <>
              CSR - <span className="font-normal">Your Soul Tribe</span>
            </>
          </Link>
        </div>
        <div className="text-xl font-extralight py-2">
          <Link href="/">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
