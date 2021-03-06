exports.power = {
  name: 'Massive Cleave',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['whirling-pain'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 15
  },
  tooltip: 'Strike in front of you for 142 - 192 - 167% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/massive-cleave.png'
};
