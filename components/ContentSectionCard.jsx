import React from 'react'

const ContentSectionCard = ({ mainTitle, content }) => {
  return (
    <div className="w-full py-4 px-4 md:px-8 bg-white border-4 rounded-xl border-gray-100">
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{mainTitle}</h2>
        <p className="mt-2 text-gray-600 text-lg">{content}</p>
      </div>
    </div>
  )
}

export default ContentSectionCard
