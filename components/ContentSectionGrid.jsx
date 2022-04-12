import ContentSectionCard from './ContentSectionCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animation-variants'

const ContentSectionGrid = ({ sections }) => {
  return (
    <div className="grid grid-cols-1 pt-4 gap-10 md:pt-10 h-full w-full max-w-6xl px-2 md:px-0">
      {sections &&
        sections.map((section) => (
          <motion.div
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            variants={fadeIn}
            key={section.id}
          >
            <ContentSectionCard
              mainTitle={section.mainTitle}
              content={section.content}
              imageSrc={section.imageSrc}
            />
          </motion.div>
        ))}
    </div>
  )
}

export default ContentSectionGrid
