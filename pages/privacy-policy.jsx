import { motion } from 'framer-motion'
import Head from 'next/head'
import PaddingLayout from '../components/PaddingLayout'
import { fadeIn } from '../utils/animation-variants'

const PrivacyPolicy = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>Privacy Policy - Pattraco</title>
        <meta
          name="Privacy policy for pattraco"
          content="Privacy policy for pattraco"
        />
        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>
      <main className="h-full lg:min-h-screen lg:h-full bg-primary w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10 lg:py-10 lg:px-24 px-2 py-4">
          <div className="w-full max-w-5xl bg-white shadow rounded-2xl p-6 mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="text-4xl pb-1 mb-4 font-semibold">
                Privacy Policy for Pattraco.com
              </div>
              <div className="mb-4">
                <div className="font-thin">
                  <span className="font-semibold">Effective Date: </span> 04th
                  October 2011
                </div>
                <div className="font-thin">
                  <span className="font-semibold">Last Updated: </span> 04th
                  October 2024
                </div>
              </div>
              <div className="font-thin">
                At <span className="font-semibold">Pattraco.com</span>, your
                privacy is a priority. This Privacy Policy explains how we
                collect, use, disclose, and protect your personal information
                when you interact with our website, whether you`&:apos`re
                exploring our{' '}
                <span className="font-semibold">
                  solar solutions, jewelry, FMCG products, fashion lines,
                  agrotech innovations, or CSR initiatives.
                </span>
              </div>
              <div className="mt-4 font-thin">
                <div className="mb-4">
                  <ol className="list-inside">
                    <li className="mb-4">
                      <div className="font-semibold text-xl">
                        1. Information We Collect
                      </div>
                      <div className="mb-4 mt-2">
                        We may collect the following types of personal and
                        non-personal information:
                      </div>
                      <ul className="ml-4 list-[lower-alpha] list-inside">
                        <li className="mb-4 font-semibold">
                          Information You Provide:
                          <ul className="ml-4 list-disc list-inside font-thin">
                            <li>Name, email address, phone number</li>
                            <li>Shipping/billing address</li>
                            <li>Business details (for B2B inquiries)</li>
                            <li>
                              Resume or personal background (if applying for CSR
                              or jobs)
                            </li>
                            <li>Feedback, reviews, and survey responses</li>
                          </ul>
                        </li>
                        <li className="mb-4 font-semibold">
                          Payment & Transaction Data:
                          <ul className="ml-4 list-disc list-inside font-thin">
                            <li>Payment method, billing address</li>
                            <li>Purchase history</li>
                          </ul>
                          <div className="italic font-thin mt-2">
                            (Note: We do{' '}
                            <span className="font-semibold">not</span> store
                            credit/debit card numbers. All payments are
                            processed securely by third-party <br />
                            payment gateways.)
                          </div>
                        </li>
                        <li className="mb-2 font-semibold">
                          Technical & Usage Data:
                          <ul className="ml-4 list-disc list-inside font-thin">
                            <li>
                              IP address, browser type, device information
                            </li>
                            <li>
                              Site interaction data via cookies and analytics
                              tools
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <div className="font-semibold text-xl">
                        2. How We Use Your Information
                      </div>
                      <div className="mb-4 mt-2">
                        We use the data we collect to:
                      </div>
                      <ul className="ml-4 list-disc list-inside">
                        <li>
                          <span className="font-semibold">
                            Process orders and transactions
                          </span>{' '}
                          across our product and service lines
                        </li>
                        <li className="font-semibold">
                          Provide customer support
                        </li>
                        <li className="font-semibold">
                          Customize and improve user experience
                        </li>
                        <li>
                          <span className="font-semibold">Send updates</span>{' '}
                          about products, offers, CSR activities, and events
                          (only if you opt in)
                        </li>
                        <li>
                          <span className="font-semibold">Collaborate</span>{' '}
                          with businesses, NGOs, and government bodies in our
                          agrotech and CSR sectors
                        </li>
                        <li className="font-semibold">
                          Comply with legal and regulatory obligation
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <div className="font-semibold text-xl">
                        3. Sharing of Information
                      </div>
                      <div className="mb-4 mt-2">
                        We do{' '}
                        <span className="font-semibold">not sell or rent</span>{' '}
                        your personal data. We may share data with:
                      </div>
                      <ul className="ml-4 list-disc list-inside">
                        <li>
                          <span className="font-semibold">
                            Service providers:
                          </span>{' '}
                          logistics, payment processors, marketing agencies
                        </li>
                        <li>
                          <span className="font-semibold">CSR partners:</span>{' '}
                          only with consent, and only if related to
                          collaborative work or volunteer activities
                        </li>
                        <li>
                          <span className="font-semibold">
                            Legal authorities:
                          </span>{' '}
                          when required by law or to protect our legal interests
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <div className="font-semibold text-xl">
                        4. Cookies and Analytics
                      </div>
                      <div className="mb-4 mt-2">
                        We use cookies and tracking tools to:
                      </div>
                      <ul className="ml-4 list-disc list-inside">
                        <li>
                          Save your preferences (like region, currency, or
                          language)
                        </li>
                        <li>
                          Track usage patterns to improve site functionality
                        </li>
                        <li>
                          Analyze trends via Google Analytics or equivalent
                          tools
                        </li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <div className="font-semibold text-xl">
                        5. Data Security
                      </div>
                      <div className="mb-4 mt-2">
                        We implement physical, technical, and administrative
                        security measures to safeguard your data. However, no
                        system is 100% secure, and we encourage users to also
                        practice safe online behavior.
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="font-semibold text-xl">
                        6. Your Rights
                      </div>
                      <div className="mb-4 mt-2">
                        Depending on your location, you may have the right to:
                      </div>
                      <ul className="ml-4 list-disc list-inside">
                        <li>Access your personal data</li>
                        <li>Correct or delete your data</li>
                        <li>Withdraw consent at any time (where applicable)</li>
                        <li>
                          Object to or restrict certain types of data processing
                        </li>
                      </ul>
                      <div className="mt-2">
                        Please contact us at{' '}
                        <a
                          className="text-primary"
                          href="mailto:info@pattraco.com"
                        >
                          info@pattraco.com
                        </a>{' '}
                        to exercise these rights.
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="font-semibold text-xl">
                        7. Third-Party Links
                      </div>
                      <div className="mb-4 mt-2">
                        Our website may contain links to third-party sites
                        (e.g., payment providers, social platforms, partners).
                        We are not responsible for their privacy practices.
                        Please review their policies separately.
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="font-semibold text-xl">
                        8. Children’s Privacy
                      </div>
                      <div className="mb-4 mt-2">
                        Our website is not intended for use by individuals under
                        the age of 16. We do not knowingly collect data from
                        minors.
                      </div>
                    </li>
                    <li>
                      <div className="font-semibold text-xl">
                        9. Updates to This Policy
                      </div>
                      <div className="mb-4 mt-2">
                        We may update this policy from time to time to reflect
                        changes in technology, legal requirements, or business
                        practices. The latest version will always be available
                        on this page.
                      </div>
                    </li>
                    <li>
                      <div className="font-semibold text-xl">
                        10. Contact Us
                      </div>
                      <div className="mb-4 mt-2">
                        If you have any questions or concerns about this Privacy
                        Policy or your data, please contact us:
                      </div>
                      <div className="mt-2">
                        <span className="font-semibold">Email:</span>{' '}
                        <a
                          className="text-primary"
                          href="mailto:info@pattraco.com"
                        >
                          info@pattraco.com
                        </a>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <PaddingLayout />
      </main>
    </motion.div>
  )
}

export default PrivacyPolicy
