import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="w-full h-full lg:h-16 space-y-6 lg:space-y-1 flex flex-col justify-center items-center uppercase py-10">
      {/* <div className="flex w-full justify-center flex-col lg:flex-row items-center space-y-2 lg:space-y-0 space-x-0 lg:space-x-2 h-full lg:h-12">
        <Link href="/">
          <a className="hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl lg:text-base ">
            Home
          </a>
        </Link>
        <div className="hidden lg:block font-semibold text-xl">•</div>
        <Link href="/sun-infinity">
          <a className="hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl lg:text-base ">
            Sun Infinity
          </a>
        </Link>
        <div className="hidden lg:block font-semibold text-xl">•</div>
        <Link href="/zayaa">
          <a className="hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl lg:text-base ">
            Zayaa
          </a>
        </Link>
        <div className="hidden lg:block font-semibold text-xl">•</div>
        <Link href="/imperial-stores">
          <a className="hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl lg:text-base ">
            Imperial Stores
          </a>
        </Link>
        <div className="hidden lg:block font-semibold text-xl">•</div>
        <Link href="/saibarrelco">
          <a className="hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl lg:text-base ">
            Saibarrelco
          </a>
        </Link>
        <div className="hidden lg:block font-semibold text-xl">•</div>
        <Link href="/your-soul-tribe">
          <a className="hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl lg:text-base ">
            Your Soul Tribe
          </a>
        </Link>
        <div className="hidden lg:block font-semibold text-xl">•</div>
        <Link href="/contact">
          <a className="hover:border-b-2 hover:border-primary transition h-6 font-semibold text-xl lg:text-base ">
            Contact
          </a>
        </Link>
      </div> */}
      <div> &#169; {currentYear} Pattraco</div>
    </div>
  )
}

export default Footer
