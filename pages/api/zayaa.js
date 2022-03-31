export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      sections: [
        {
          id: 1,
          mainTitle: 'What We Do',
          content:
            'At ZAYAA, we encourage ethical earth-mining of natural gemstones in various parts of the world. From indigenous mines at Panna, Madhya Pradesh, India to Lucra mines in Botswana, we have the widest range and collection of natural diamonds and gemstones. ',
        },
        {
          id: 2,
          mainTitle: 'High-Jewelry and Certified Diamonds and Gemstones',
          content:
            'At ZAYAA, we are certified exporters of natural diamonds and colored gemstones. Our artisan and handmade jewelry is adored for its finesse, quality and world-class quality. ',
        },
        {
          id: 3,
          mainTitle: 'From mine to jewelry advantage',
          content:
            'With our reach to the most authentic mines for gemstones such as diamonds, emeralds, rubies, sapphires, coral and many more - we are able to provide our esteemed customers with high-jewelry with price excellence. With a repeat rate of over 94% we are proud of our quality and deliverance of goods across the world. ',
        },
        {
          id: 4,
          mainTitle: 'Strong Community Partnership',
          content:
            'We hire from local communities and generally work with artisans and craftsman to encourage handmade production. As a result we are able to build long-term community relationships, which allows us to build a sustainable jewelry delivery model across the world.',
        },
      ],
    })
  }
}
