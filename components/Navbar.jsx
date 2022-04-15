import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="h-28 sticky w-full z-50 bg-white top-0 border-b shadow md:border-none md:shadow-none">
      {/* Top Menu */}
      <div className="py-2 bg-primary text-primary-background">
        <div className="container h-full mx-auto px-4 md:px-0">
          <div className="text-sm md:text-base space-x-2 flex justify-end items-center">
            <div>
              <a href="mailto:info@pattrco.com">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>info@pattraco.com</span>
              </a>
            </div>
            <div>
              <a href="tel:+919915381868">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +91-9915381868
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Main Menu */}
      <div className="container py-2 h-full mx-auto px-4 md:px-0">
        <div className="flex h-auto justify-between content-center items-center">
          <div className="w-3/12">
            <Link href="/" passHref>
              <div className="relative h-12 w-24 md:h-12 md:w-24 cursor-pointer">
                <Image
                  src={Logo}
                  layout="fill"
                  objectFit="cover"
                  alt="Pattraco"
                />
              </div>
            </Link>
          </div>
          <div className=" w-9/12 flex justify-end flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-6 uppercase h-full md:h-12">
            <Link href="/">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Home
              </a>
            </Link>
            <Link href="/sun-infinity">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Sun Infinity
              </a>
            </Link>
            <Link href="/zayaa">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Zayaa
              </a>
            </Link>
            <Link href="/imperial-stores">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Imperial Stores
              </a>
            </Link>
            <Link href="/saibarrelco">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Saibarrelco
              </a>
            </Link>
            <Link href="/your-soul-tribe">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Your Soul Tribe
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Contact
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden h-auto justify-between content-center items-center">
          <div className="flex w-full justify-center flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-6 uppercase h-full md:h-12">
            <Link href="/">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Home
              </a>
            </Link>
            <Link href="/sun-infinity">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Sun Infinity
              </a>
            </Link>
            <Link href="/zayaa">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Zayaa
              </a>
            </Link>
            <Link href="/imperial-stores">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Imperial Stores
              </a>
            </Link>
            <Link href="/saibarrelco">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Saibarrelco
              </a>
            </Link>
            <Link href="/your-soul-tribe">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Your Soul Tribe
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-primary hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl md:text-base ">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
