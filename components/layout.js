import Sidebar from './Sidebar'

const layout = ({ children }) => {
  return (
    <>
      <div className="min-w-full flex h-screen min-h-screen">
        <div className="w-2/12 md:w-1/12">
          <Sidebar />
        </div>
        <div className="w-10/12 md:w-11/12 overflow-x-scroll">{children}</div>
      </div>
    </>
  )
}

export default layout
