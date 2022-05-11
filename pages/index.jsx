import { motion } from 'framer-motion'
import Link from 'next/link'
import HomeCard from '../components/HomeCard'
import agroBg from '../public/agro/agro-image.webp'
import csrBg from '../public/csr.webp'
import fmcgBg from '../public/fmcg/fmcg-image-1.webp'
import miningBg from '../public/mining/mining.webp'
import solarBg from '../public/solar/solar-panel-alternate.webp'

export default function Home() {
  const data = [
    {
      id: 1,
      href: '/sun-infinity',
      imageSrc: solarBg,
      mainTitle: 'Sun Infinity',
      subTitle: 'Solar Power',
      position: '50% 50%',
    },
    {
      id: 2,
      href: '/zayaa',
      imageSrc: miningBg,
      mainTitle: 'Zayaa',
      subTitle: 'Earth Mined Gemstones & Jewelry',
      position: '50% 50%',
    },
    {
      id: 3,
      href: '/imperial-stores',
      imageSrc: fmcgBg,
      mainTitle: 'Imperial Stores',
      subTitle: 'FMCG Retail',
      position: '50% 50%',
    },
    {
      id: 4,
      href: '/saibarrelco',
      imageSrc: agroBg,
      mainTitle: 'Saibarrelco',
      subTitle: 'Agro Technology',
      position: '50% 50%',
    },
    {
      id: 5,
      href: '/your-soul-tribe',
      imageSrc: csrBg,
      mainTitle: 'Your Soul Tribe',
      subTitle: 'CSR',
      position: '70% 50%',
    },
  ]

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <div className="px-0">
        <main className="w-full h-full">
          <div className="h-full lg:main-height-without-footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {data.map(
              ({ id, href, mainTitle, imageSrc, subTitle, position }) => (
                <Link
                  key={id}
                  href={href}
                  as={href}
                  passHref
                  className="cursor-pointer"
                >
                  <HomeCard
                    imageSrc={imageSrc}
                    mainTitle={mainTitle}
                    subTitle={subTitle}
                    position={position}
                  />
                </Link>
              )
            )}
          </div>
        </main>
      </div>
    </motion.div>
  )
}
