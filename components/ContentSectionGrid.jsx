import ContentSectionCard from './ContentSectionCard'

const ContentSectionGrid = ({ sections }) => {
  return (
    <div className="grid grid-cols-1 pt-4 gap-10 md:pt-10 h-full w-full max-w-6xl px-2 md:px-0">
      {sections &&
        sections.map((section) => (
          <ContentSectionCard
            key={section.id}
            mainTitle={section.mainTitle}
            content={section.content}
            imageSrc={section.imageSrc}
          />
        ))}
    </div>
  )
}

export default ContentSectionGrid
