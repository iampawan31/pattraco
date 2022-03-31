import { forwardRef } from 'react'
import Image from 'next/image'

// eslint-disable-next-line react/display-name
const HomeCard = forwardRef(({ href, imageSrc, mainTitle, subTitle }, ref) => {
  return (
    <a href={href} className="group" ref={ref}>
      <div className="relative h-56 sm:h-60 md:h-full w-full">
        <Image
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 ease-in-out transform transition duration-500"
          alt={mainTitle}
          placeholder="blur"
        />
        <div
          className="bg-gradient-to-t from-black/90 to-black/10
        group-hover:from-black/90 transition duration-300
        group-hover:to-black/30 w-full h-full py-2 md:py-6 text-left
        content-end cursor-pointer absolute top-0 left-0 flex
        flex-col justify-end text-gray-300 z-30 font-extralight px-2"
        >
          <div className="text-3xl ">{mainTitle}</div>
          <div>{subTitle}</div>
        </div>
      </div>
    </a>
  )
})

export default HomeCard
