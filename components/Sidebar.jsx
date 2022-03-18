import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="flex static h-screen w-full">
      <div className="flex w-full h-1/2 md:h-2/5 min-h-fit py-2 justify-center border-b border-black">
        <div className="text-sideways font-light text-2xl">PATTRACO</div>
      </div>
    </div>
  )
}

export default Sidebar
