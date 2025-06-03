import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="w-full h-full lg:h-16 space-y-6 bg-primary lg:space-y-1 flex flex-col justify-center items-center uppercase py-10">
      <div className="flex flex-col md:flex-row items-center md: gap-2">
        <div className="">
          <Link href="/privacy-policy">
            <a className="hover:border-b-4 hover:border-primary transition h-8 text-base pb-2">
              Privacy Policy
            </a>
          </Link>
        </div>
        <div> &#169; {currentYear} Pattraco</div>
      </div>
    </div>
  )
}

export default Footer
