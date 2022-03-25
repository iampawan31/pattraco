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
    <div className="flex flex-row w-full h-full justify-center items-center space-x-4">
      <div className="w-full h-full relative">
        <Image
          src={imageSrc}
          layout="fill"
          className="hover:scale-105 ease-linear transition duration-300"
          objectFit="cover"
          alt={mainTitle}
        />
        <div className="flex flex-col">
          <div className="w-auto font-sans text-white text-5xl flex-col absolute right-8 font-extralight">
            <div className="-ml-8 -mb-6">{currentSlide}</div>
            <div>/</div>
            <div className="-mr-8 -mt-6 font-medium">{totalSlides}</div>
          </div>
        </div>
        <div className="w-full text-left text-4xl cursor-pointer px-4 font-extralight bg-gradient-to-t from-black/70 to-black/5 text-white py-4 bottom-0 left-0 absolute z-50">
          <Link href={href} passHref>
            <div className="flex space-x-2">
              <div>{mainTitle}</div>
              <div>-</div>
              <div className="font-normal">{subTitle}</div>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="w-1/12 font-sans text-7xl flex-col font-extralight flex">
        <div className="-ml-12 -mb-10">{currentSlide}</div>
        <div>/</div>
        <div className="-mr-12 -mt-10 font-medium">{totalSlides}</div>
      </div> */}
    </div>
  )
}

export default HomeSlide
