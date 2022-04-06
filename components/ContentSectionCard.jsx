import Image from 'next/image'

const ContentSectionCard = ({ mainTitle, content, imageSrc }) => {
  return (
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
  )
}

export default ContentSectionCard
