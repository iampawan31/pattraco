import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="w-full h-full md:h-28 space-y-6 md:space-y-1 flex flex-col justify-center items-center uppercase py-10">
      <div className="flex w-full justify-center flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-2 h-full md:h-12">
        <Link href="/sun-infinity">
          <a className="text-primary-dark hover:border-b-2 hover:border-primary-dark transition h-6 font-semibold text-xl md:text-base ">
            Sun Infinity
          </a>
        </Link>
        <div className="text-primary-dark hidden md:block font-semibold text-xl">
          •
        </div>
        <Link href="/zayaa">
          <a className="text-primary-dark hover:border-b-2 hover:border-primary-dark transition h-6 font-semibold text-xl md:text-base ">
            Zayaa
          </a>
        </Link>
        <div className="text-primary-dark hidden md:block font-semibold text-xl">
          •
        </div>
        <Link href="/imperial-stores">
          <a className="text-primary-dark hover:border-b-2 hover:border-primary-dark transition h-6 font-semibold text-xl md:text-base ">
            Imperial Stores
          </a>
        </Link>
        <div className="text-primary-dark hidden md:block font-semibold text-xl">
          •
        </div>
        <Link href="/saibarrelco">
          <a className="text-primary-dark hover:border-b-2 hover:border-primary-dark transition h-6 font-semibold text-xl md:text-base ">
            Saibarrelco
          </a>
        </Link>
        <div className="text-primary-dark hidden md:block font-semibold text-xl">
          •
        </div>
        <Link href="/your-soul-tribe">
          <a className="text-primary-dark hover:border-b-2 hover:border-primary-dark transition h-6 font-semibold text-xl md:text-base ">
            Your Soul Tribe
          </a>
        </Link>
        <div className="text-primary-dark hidden md:block font-semibold text-xl">
          •
        </div>
        <Link href="/contact">
          <a className="text-primary-dark hover:border-b-2 hover:border-primary-dark transition h-6 font-semibold text-xl md:text-base ">
            Contact
          </a>
        </Link>
      </div>
      <div> &#169; {currentYear} Pattraco</div>
    </div>
  )
}

export default Footer
