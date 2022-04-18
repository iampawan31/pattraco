import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideLeft } from '../utils/animation-variants'

const HeroSection = ({ imageSrc, mainTitle, subTitle }) => {
  return (
    <div className="flex">
      <div className="relative h-60 lg:main-height-without-footer w-full">
        <Image
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 ease-in-out transform transition duration-500"
          alt={mainTitle}
          placeholder="blur"
        />
        <div
          className="lg:bg-gradient-to-l 
      lg:from-black/50 
      lg:to-black/5
        w-full 
        h-full 
        py-6 
        text-right
        content-end 
        absolute 
        top-0 
        right-0 
        px-10 
        flex
        flex-col 
        justify-center 
        text-gray-100 
        z-30 
        font-extralight"
        />
        <div className="absolute z-40 w-full lg:w-fit left-0 lg:left-auto flex flex-col items-left lg:items-end bottom-0 lg:bottom-5 lg:right-5 bg-opacity-70 lg:bg-opacity-60 bg-black  lg:rounded-xl px-2 lg:px-4 py-1 lg:py-4 lg:text-right">
          <motion.div initial="hidden" animate="visible" variants={slideLeft}>
            <div className="flex text-3xl lg:text-7xl lg:mb-2 font-bold text-primary-background">
              {mainTitle}
            </div>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={slideLeft}>
            <div className="flex text-2xl lg:text-5xl text-primary-background">
              {subTitle}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
