// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      sections: [
        {
          id: 1,
          mainTitle: 'What We Do',
          content: `We manifest the infinite power of the sun in the form of
        renewable energy. Pattraco&apos;s solar endeavour - SUN
        INFINITY, is one of the largest solar power manufacturers in
        India. With our projects in north-western Rajasthan, India we
        supply renewable energy to central and state government
        utilities and independent industrial and commercial customers at
        predictable fixed prices. Since our renewable power generation
        does not rely on fossil fuels, our electricity prices are
        insulated from the volatility of input commodity pricing. We
        also provide delivery commitments for the electricity production
        of our power plants to our customers.`,
        },
        {
          id: 2,
          mainTitle: 'Low Cost of Energy',
          content: `We have lowered our cost of renewable power generation through
        value engineering, operational performance monitoring and strong
        financial strengths. This allows us to deliver cost-effective
        energy for our customers. Our in-house EPC expertise lowers
        system costs and our advanced in-house operations and
        maintenance capability allows us to increase power yields and
        monitor project performance near real-time. Coupled with our
        strong financial strategy, we believe that we are able to offer
        low-cost renewable power solutions at high efficiency yields.`,
        },
        {
          id: 3,
          mainTitle: 'Strong Value Proposition for Our Customers',
          content: `We manage the entire development and operation process,
        providing customers with long term certainty under fixed price
        PPAs. Our in-house focus on high engineering standards and asset
        quality and maintenance ensures high levels of availability and
        service to our customers.`,
        },
        {
          id: 4,
          mainTitle: 'Integrated Profile',
          content: `Our integrated profile affords us greater control over project
        development, construction and operation, which provides us with
        greater insight and certainty on our construction costs and
        timeline and operations and maintenance.`,
        },
        {
          id: 5,
          mainTitle: 'Strong Community Partnership',
          content: `We hire from local communities and generally lease land with few
        alternative uses, providing local communities with a stream of
        discretionary cash flow without displacing alternative
        businesses. As a result we are able to build long-term community
        relationships, which allows us to improve our completion time,
        further reducing project development risk.`,
        },
      ],
    })
  }
}
