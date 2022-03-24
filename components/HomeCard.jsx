import { forwardRef } from 'react'
import Image from 'next/image'

// eslint-disable-next-line react/display-name
const HomeCard = forwardRef(
  ({ onClick, href, imageSrc, mainTitle, subTitle }, ref) => {
    return (
      <a href={href}>
        <div className="bg-white w-full shadow-xl h-full rounded">
          <div className="relative w-full h-80 rounded">
            <Image
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              alt="Agro"
              className="rounded"
            />
          </div>
          <div className="relative rounded">
            <div className="rounded bg-gradient-to-t from-black/50 to-green-300/30  w-full h-80 py-2 text-left content-end cursor-pointer absolute left-0 bottom-0 flex flex-col justify-end text-white z-30 font-extralight px-2">
              <div className="text-4xl font-normal">{mainTitle}</div>
              <div className="text-2xl">{subTitle}</div>
            </div>
          </div>
        </div>
      </a>
    )
  }
)

export default HomeCard
