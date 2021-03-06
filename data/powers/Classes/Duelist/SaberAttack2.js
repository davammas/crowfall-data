exports.power = {
  name: 'Saber Attack 2',
  sources: [
    { type: 'class', id: 'duelist' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['saber-attack-3'],
  previous_chain: ['saber-attack-1'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Attack for 54 - 81 + 68% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/saber-attack-2.png'
};
