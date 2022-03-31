export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      sections: [
        {
          id: 1,
          mainTitle: 'Plantations',
          content:
            "At SAIBARRELCO we have north-India's more scientific eco-farming concepts in conserving one of the world’s oldest plant species, by foraying into the potential of US$3.6Billion in the Indian Agro-Forestry commercial. We are regenerating one of the most demanded & endangered forest species, and have also established plantations as an AgroForestry concept.",
        },
        {
          id: 2,
          mainTitle: 'Farming & Storage',
          content:
            'Our growing farm acreage across India, enables us to create a sustainable environment and also encourage crop rotations to increase land fertility. With the most modern harvest technologies, innovative storage and upcoming controlled Atmosphere stores, we are bringing food to the table - as fresh as possible. ',
        },
        {
          id: 3,
          mainTitle: 'Farm to Table',
          content:
            'We encourage integrated farm produces to reach our customers as soon as possible, so that they can savour high-quality food.',
        },
      ],
    })
  }
}
