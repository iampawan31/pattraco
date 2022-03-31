export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      sections: [
        {
          id: 1,
          mainTitle: 'Health Food Innovatives',
          content:
            'Our partnership with leading Indian brands, that manufacture healthy, preservative free foods - is loved by our customers. The promise of health is delivered at Imperial Stores.',
        },
        {
          id: 2,
          mainTitle: 'Cost Effective Luxury',
          content:
            'Fast moving consumer goods - are closely connected to your health. And we understand the value of your safety. This encourages us to create the most effective, supply chain - which is not only affordable - but also promises the luxury your body deserves.',
        },
      ],
    })
  }
}
