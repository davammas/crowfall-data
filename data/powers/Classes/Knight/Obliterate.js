exports.power = {
  name: 'Obliterate',
  sources: [
    { type: 'class', id: 'knight' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 24,
  targeting: 'Sphere',
  max_targets: 3,
  range: 5,
  next_chain: [],
  previous_chain: ['brutal-strike', 'twin-assault'],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Attack and knock down enemies in front of you for 150 - 203 + 177% Crushing Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/obliterate.png'
};
