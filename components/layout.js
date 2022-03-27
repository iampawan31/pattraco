import Navbar from './Navbar'

const layout = ({ children }) => {
  return (
    <div className="w-full scroll-smooth h-full min-h-screen">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  )
}

export default layout
