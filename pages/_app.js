import Layout from '../components/layout'
import '../styles/globals.css'
import useVH from 'react-viewport-height'

function MyApp({ Component, pageProps }) {
  useVH()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
