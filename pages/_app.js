import '../styles/globals.css'
import Layout from '../components/layout'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
