export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      sections: [
        {
          id: 1,
          mainTitle: 'Positive Mental Health Aids',
          content:
            'We understand closely that in the 21st century, the advent of technology leaves limited space for focus on personal mental. At Your Soul Tribe - we create content, group activities and sustainable lifestyle habit classes - for children and adults, to encourage a happier living.',
        },
        {
          id: 2,
          mainTitle: 'Food Drives',
          content:
            'We aim at eradicating hunger and that two-square meals are delivered to as many people as possible. This encourages us at Your Soul Tribe to conduct food drives, dry meal package deliveries and sanitization kits to people who have limited access to it. Our goal is to reach out to as many locations as possible and bring about a change. Though a drop in the ocean, but a responsible one. ',
        },
      ],
    })
  }
}
