import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Logo from '../public/logo.png'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const { pathname } = router

  const onLinkClick = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
      console.log(window.innerHeight, window.innerWidth)
    })

    if (menuOpen) {
      setMenuOpen(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <nav className="h-24 sticky w-full z-50 bg-white top-0 border-b shadow lg:border-none lg:shadow-none">
      {/* Top Menu */}
      <div className="h-8 bg-primary flex items-center">
        <div className="container h-auto mx-auto px-4 lg:px-2 xl:px-0">
          <div className="text-sm lg:text-base font-normal space-x-2 flex justify-center lg:justify-end items-center">
            <div>
              <a href="mailto:info@pattrco.com">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>info@pattraco.com</span>
              </a>
            </div>
            <div>
              <a href="tel:+919915381868">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+91-9915381868</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Main Menu */}
      <div className="container h-16 mx-auto px-4 lg:px-2 xl:px-0">
        <div className="flex h-full justify-between items-center">
          <div className="w-2/12 xl:w-3/12">
            <Link href="/" passHref>
              <div className="relative h-12 w-24 lg:h-12 lg:w-24 cursor-pointer">
                <Image
                  src={Logo}
                  layout="fill"
                  objectFit="cover"
                  alt="Pattraco"
                />
              </div>
            </Link>
          </div>
          {/* Mobile Menu Open Button */}
          <div className="flex w-9/12 lg:hidden justify-end items-center">
            <button onClick={onLinkClick} aria-label="Menu Button">
              <FontAwesomeIcon
                size="2x"
                icon={menuOpen ? faXmark : faBars}
                className=""
              />
            </button>
          </div>
          {/* Main Navigation */}
          <div className="hidden w-10/12 xl:w-9/12 lg:flex justify-end flex-col lg:flex-row items-center space-y-2 lg:space-y-0 space-x-0 lg:space-x-6 uppercase h-full lg:h-12">
            <Link href="/">
              <a className="hover:border-b-4 hover:border-primary transition h-8 font-light text-xl lg:text-base pb-2">
                Home
              </a>
            </Link>
            <Link href="/sun-infinity">
              <a className="hover:border-b-4 hover:border-primary transition h-8 font-light text-xl lg:text-base pb-2">
                Sun Infinity
              </a>
            </Link>
            <Link href="/zayaa">
              <a className="hover:border-b-4 hover:border-primary transition h-8 font-light text-xl lg:text-base pb-2">
                Zayaa
              </a>
            </Link>
            <Link href="/imperial-stores">
              <a className="hover:border-b-4 hover:border-primary transition h-8 font-light text-xl lg:text-base pb-2">
                Imperial Stores
              </a>
            </Link>
            <Link href="/saibarrelco">
              <a className="hover:border-b-4 hover:border-primary transition h-8 font-light text-xl lg:text-base pb-2">
                Saibarrelco
              </a>
            </Link>
            <Link href="/your-soul-tribe">
              <a className="hover:border-b-4 hover:border-primary transition h-8 font-light text-xl lg:text-base pb-2">
                Your Soul Tribe
              </a>
            </Link>
            <Link href="/contact">
              <a className="hover:border-b-4 hover:border-primary transition h-8 font-light text-xl lg:text-base pb-2">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? 'scale-y-100' : 'scale-y-0'
        } justify-between border-t-4 z-50 border-primary duration-300 origin-top transform-gpu bg-white w-full transition content-center items-center py-4`}
      >
        <div className="flex w-full justify-center flex-col lg:flex-row items-center space-y-2 lg:space-y-0 space-x-0 lg:space-x-6 uppercase h-full lg:h-12">
          <Link href="/">
            <a
              onClick={onLinkClick}
              className="hover:border-b-2 hover:border-primary transition pb-1 h-8 font-light text-2xl lg:text-base "
            >
              Home
            </a>
          </Link>
          <Link href="/sun-infinity">
            <a
              onClick={onLinkClick}
              className="hover:border-b-2 hover:border-primary transition pb-1 h-8 font-light text-2xl lg:text-base "
            >
              Sun Infinity
            </a>
          </Link>
          <Link href="/zayaa">
            <a
              onClick={onLinkClick}
              className="hover:border-b-2 hover:border-primary transition pb-1 h-8 font-light text-2xl lg:text-base "
            >
              Zayaa
            </a>
          </Link>
          <Link href="/imperial-stores">
            <a
              onClick={onLinkClick}
              className="hover:border-b-2 hover:border-primary transition pb-1 h-8 font-light text-2xl lg:text-base "
            >
              Imperial Stores
            </a>
          </Link>
          <Link href="/saibarrelco">
            <a
              onClick={onLinkClick}
              className="hover:border-b-2 hover:border-primary transition pb-1 h-8 font-light text-2xl lg:text-base "
            >
              Saibarrelco
            </a>
          </Link>
          <Link href="/your-soul-tribe">
            <a
              onClick={onLinkClick}
              className="hover:border-b-2 hover:border-primary transition pb-1 h-8 font-light text-2xl lg:text-base "
            >
              Your Soul Tribe
            </a>
          </Link>
          <Link href="/contact">
            <a
              onClick={onLinkClick}
              className="hover:border-b-2 hover:border-primary transition pb-1 h-8 font-light text-2xl lg:text-base "
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
