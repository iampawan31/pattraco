import Image from 'next/image'

const HeroSection = ({ imageSrc, mainTitle, subTitle }) => {
  return (
    <div className="flex">
      <div className="relative h-60 md:main-height-without-footer w-full">
        <Image
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 ease-in-out transform transition duration-500"
          alt={mainTitle}
          placeholder="blur"
        />
        <div
          className="bg-gradient-to-l 
      from-black/50 
      to-black/5
        w-full 
        h-full 
        py-6 
        text-right
        content-end 
        cursor-pointer 
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
        <div className="absolute z-40 w-full md:w-fit left-0 md:left-auto flex md:flex-col items-center md:items-end bottom-0 md:bottom-0 md:right-0 bg-white bg-opacity-60 md:rounded-tl-xl px-4 py-4 md:text-right">
          <div className="hidden md:flex text-3xl md:text-7xl md:mb-2 font-bold">
            {mainTitle}
          </div>
          <div className="hidden md:flex text-3xl md:text-5xl">{subTitle}</div>
          <div className="text-3xl md:hidden">
            {`${mainTitle} - ${subTitle}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection