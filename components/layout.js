import Navbar from './Navbar'
import Footer from './Footer'

const layout = ({ children }) => {
  return (
    <div className="w-full h-screen min-h-screen">
      <Navbar />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  )
}

export default layout
