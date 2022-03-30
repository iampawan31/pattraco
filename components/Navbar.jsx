import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="h-14 sticky w-full z-50 bg-white top-0 border-b shadow md:border-none md:shadow-none">
      <div className="container h-full mx-auto px-4 md:px-0">
        <div className="flex h-full justify-between content-center items-center">
          <div className="hidden md:block w-1/4"></div>
          <div className="w-1/2 md:w-1/4 flex justify-start md:justify-center">
            <Link href="/" passHref>
              <div className="relative h-10 w-24 md:h-12 md:w-28">
                <Image
                  src={Logo}
                  layout="fill"
                  objectFit="cover"
                  alt="Pattraco"
                />
              </div>
            </Link>
          </div>
          <div className="w-1/2 md:w-1/4 flex justify-end items-center">
            <div className="flex flex-col font-light">
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
      </div>
    </nav>
  )
}

export default Navbar
