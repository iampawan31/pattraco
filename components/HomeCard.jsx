import Image from 'next/image'
import { useRef } from 'react'

const HomeCard = ({ title, imageSrc }) => {
  const cardRef = useRef(null)
  return (
    <div
      ref={cardRef}
      className="border-l border-b border-black flex flex-col w-full h-80"
    >
      <div className="relative w-full h-4/5 border-b border-black">
        <Image src={imageSrc} layout="fill" alt={title} objectFit="cover" />
      </div>
      <div className="font-sans text-2xl h-1/5 font-light px-4 py-1 flex items-center">
        {title}
      </div>
    </div>
  )
}

export default HomeCard
