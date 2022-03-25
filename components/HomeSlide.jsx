import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HomeSlide = ({
  imageSrc,
  mainTitle,
  subTitle,
  currentSlide,
  totalSlides,
  href,
}) => {
  return (
    <div className="flex flex-row w-full h-full justify-center items-center">
      <div className="w-4/12">
        <div className="w-full text-xl md:text-5xl cursor-pointer font-extralight py-2 md:py-4">
          <Link href={href}>
            <>
              {mainTitle} - <span className="font-normal">{subTitle}</span>
            </>
          </Link>
        </div>
      </div>

      <div className="w-6/12 h-full relative saturate-50 hover:saturate-100">
        <Image
          src={imageSrc}
          layout="fill"
          className="hover:scale-110 transition duration-300"
          objectFit="cover"
          alt={mainTitle}
        />
      </div>
      <div className="w-2/12 font-sans text-7xl flex-col font-extralight flex">
        <div className="-ml-12 -mb-10">{currentSlide}</div>
        <div>/</div>
        <div className="-mr-12 -mt-10">{totalSlides}</div>
      </div>
    </div>
  )
}

export default HomeSlide
