import Image from 'next/image'
import { motion } from 'framer-motion'

const ContentSectionCard = ({ mainTitle, content, imageSrc }) => {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow overflow-clip">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4">
        <div className="relative min-h-full h-72 lg:h-128 w-full">
          <Image
            src={imageSrc}
            layout="fill"
            className="rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"
            objectFit="cover"
            placeholder="blur"
            alt={mainTitle}
          />
        </div>
        <div className="w-full px-4 py-6">
          <h2 className="text-3xl pb-4 text-primary font-medium">
            {mainTitle}
          </h2>
          <p className="text-lg">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default ContentSectionCard
