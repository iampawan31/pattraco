import Head from 'next/head'
import Script from 'next/script'
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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics-tag" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <div className="w-full scroll-smooth font-primary text-secondary-font font-normal h-full min-h-screen">
        <Navbar />
        <div className="w-full">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default layout
