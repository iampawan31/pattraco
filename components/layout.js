import Navbar from './Navbar'

const layout = ({ children }) => {
  return (
    <>
      <div className="min-w-full h-screen min-h-screen">
        <Navbar />
        <div className="w-full">{children}</div>
      </div>
    </>
  )
}

export default layout
