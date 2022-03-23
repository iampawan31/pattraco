import { useEffect, useState, useRef } from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [backgroundImage, setBackgroundImage] = useState('')
  const bgImageRef = useRef()

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
    <Layout bgImageRef={bgImageRef} bgImage={backgroundImage}>
      <Component setBackgroundImage={setBackgroundImage} {...pageProps} />
    </Layout>
  )
}

export default MyApp
