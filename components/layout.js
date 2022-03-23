import Navbar from './Navbar'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full">{children}</div>
    </>
  )
}

export default layout
