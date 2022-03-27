import { forwardRef } from 'react'
import Image from 'next/image'

// eslint-disable-next-line react/display-name
const HomeCard = forwardRef(({ href, imageSrc, mainTitle, subTitle }, ref) => {
  return (
    <a href={href} className="group rounded">
      <div className="relative h-full w-full shadow rounded">
        <Image
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          className="rounded shadow group-hover:scale-105 transform group-hover:rounded transition duration-300"
          alt={mainTitle}
        />
        <div className="rounded bg-gradient-to-t from-black/50 to-black/30  w-full h-full py-2 text-left content-end cursor-pointer absolute top-0 left-0 flex flex-col justify-end text-white z-30 font-extralight px-2">
          <div className="text-4xl font-normal">{mainTitle}</div>
          <div className="text-2xl">{subTitle}</div>
        </div>
      </div>
    </a>
  )
})

export default HomeCard
