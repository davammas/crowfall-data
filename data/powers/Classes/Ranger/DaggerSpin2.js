exports.power = {
  name: 'Dagger Spin 2',
  sources: [
    { type: 'class', id: 'ranger' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 5,
  targeting: 'Sphere',
  max_targets: 5,
  range: 6,
  next_chain: ['dagger-spin-3'],
  previous_chain: ['dagger-spin'],
  cost: {
    pips: 0,
    resource: 34
  },
  tooltip: 'Spin in place and deal 46 - 62 + 54% Weapon Damage around you. Also increases your Lifesteal Bonus by 60% while executing this power.',
  icon: 'https://cdn.malekai.network/images/powers/dagger-spin-2.png'
};
