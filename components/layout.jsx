import Sidebar from './Sidebar'
import { useEffect } from 'react'

const Layout = ({ children }) => {
  useEffect(() => {
    function resize() {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('load', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('load', resize)
    }
  }, [])

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

export default Layout
