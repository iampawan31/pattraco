import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '../components/layout'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
