exports.power = {
  name: 'Retaliate (Duelist)',
  sources: [
    { type: 'class', id: 'duelist' }
  ],
  type: 'Retaliate',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 3,
  targeting: 'Sphere',
  max_targets: 1,
  range: '',
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Jump to your feet, damaging all nearby enemies for 105 - 158 + 132% Weapon Damage. Retaliating an Exposed enemy generates an additional Pip and reset Relaliate\'s cooldown.',
  icon: 'https://cdn.malekai.network/images/powers/retaliate-duelist.png'
};
