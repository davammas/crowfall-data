exports.power = {
  name: 'Great Swing 3',
  sources: [
    { type: 'class', id: 'templar' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['great-swing-2'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Attack for 74 - 111 + 93% Weapon Damage and generates a point of Righteousness.',
  icon: 'https://cdn.malekai.network/images/powers/great-swing-3.png'
};
