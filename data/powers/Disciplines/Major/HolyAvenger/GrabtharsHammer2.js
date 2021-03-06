exports.power = {
  name: 'Grabthars Hammer 2',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'holy-avenger' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 30,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['grabthars-hammer'],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Smash an enemy, stunning them for 106 - 143 + 124% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/grabthars-hammer-2.png'
};
