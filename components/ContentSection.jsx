import React from 'react'

const ContentSection = ({ mainTitle, content }) => {
  return (
    <>
      {/* Content Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto py-6 md:py-16 px-2 md:px-0 w-full">
          <div className="flex flex-col md:flex-row w-full text-gray-800">
            <div className="text-5xl font-light md:w-2/6 pb-4 md:pb-0">
              {mainTitle}
            </div>
            <div className="text-2xl md:w-4/6 font-light">{content}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSection
