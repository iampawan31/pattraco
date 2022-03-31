import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home - Pattraco</title>
        <meta name="description" content="Pattraco Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="w-full scroll-smooth font-sans text-gray-800 font-light h-full min-h-screen">
        <Navbar />
        <div className="w-full">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default layout
