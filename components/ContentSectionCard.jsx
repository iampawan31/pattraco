import Image from 'next/image'
import { motion } from 'framer-motion'

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    y: 60,
    opacity: 0,
  },
}

const ContentSectionCard = ({ mainTitle, content, imageSrc }) => {
  return (
    <motion.div variants={fadeInUp}>
      <div className="w-full h-full bg-white rounded-lg shadow">
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
          <div className="relative min-h-full h-48 md:h-96 w-full">
            <Image
              src={imageSrc}
              layout="fill"
              className="rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
              objectFit="cover"
              placeholder="blur"
              alt={mainTitle}
            />
          </div>
          <div className="w-full px-4 py-4">
            <h2 className="text-3xl pb-4 text-primary font-semibold">
              {mainTitle}
            </h2>
            <p className="text-lg">{content}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContentSectionCard
