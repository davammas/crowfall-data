exports.power = {
  name: 'Emerald Slash',
  sources: [
    { type: 'class', id: 'knight' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['bloodstone-spin'],
  previous_chain: ['ruby-slash'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'A basic attack slashing in front of you for 86 - 117 + 101% Weapon Damage. Scoring three or more consecutive basic attack hits activates SHIELD BASH.',
  icon: 'https://cdn.malekai.network/images/powers/emerald-slash.png'
};
