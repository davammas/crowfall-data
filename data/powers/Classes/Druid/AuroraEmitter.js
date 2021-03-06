exports.power = {
  name: 'Aurora Emitter',
  sources: [
    { type: 'class', id: 'druid' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 24,
  targeting: 'Sphere',
  max_targets: 5,
  range: 35,
  next_chain: [],
  previous_chain: ['lightning-strike'],
  cost: {
    pips: 0,
    resource: 77
  },
  tooltip: 'Strike enemies with lightning in an area for 79 - 119 damage. Enemies are left electrified and will inflict and additional 27 to 40 + #weapon_damage_2_value#% Weapon Damage over 15 seconds to nearby friendlies.',
  icon: 'https://cdn.malekai.network/images/powers/aurora-emitter.png'
};
