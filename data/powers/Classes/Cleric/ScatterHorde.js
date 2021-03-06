exports.power = {
  name: 'Scatter Horde',
  sources: [
    { type: 'class', id: 'cleric' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 24,
  targeting: 'Sphere',
  max_targets: 5,
  range: 6,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 23
  },
  tooltip: 'Rear and smash into the ground damaging 8 enemies in the area for 120 - 146 + 133% Weapon Damage, and pushing them back.',
  icon: 'https://cdn.malekai.network/images/powers/scatter-horde.png'
};
