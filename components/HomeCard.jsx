import { forwardRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// eslint-disable-next-line react/display-name
const HomeCard = forwardRef(
  ({ href, imageSrc, mainTitle, subTitle, fadeInUp, position }, ref) => {
    return (
      <motion.div variants={fadeInUp}>
        <a href={href} className="group" ref={ref}>
          <div className="relative h-56 sm:h-60 lg:h-full w-full">
            <Image
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              objectPosition={position}
              className="group-hover:scale-110 ease-in-out transform transition duration-500"
              alt={mainTitle}
              placeholder="blur"
            />
            <div
              className="w-full h-full py-2 lg:py-6 text-left
        content-end cursor-pointer absolute top-0 left-0 flex
        flex-col justify-end text-gray-100 z-30 font-extralight px-2"
            >
              <div className="text-3xl ">{mainTitle}</div>
              <div>{subTitle}</div>
            </div>
          </div>
        </a>
      </motion.div>
    )
  }
)

export default HomeCard
