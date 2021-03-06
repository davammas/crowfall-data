exports.power = {
  name: 'Dagger Spin 3',
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
  next_chain: ['dagger-spin-4'],
  previous_chain: ['dagger-spin-2'],
  cost: {
    pips: 0,
    resource: 34
  },
  tooltip: 'Spin in place and deal 52 - 70 + 61% Weapon Damage around you. Also increases your Lifesteal Bonus by 60% while executing this power.',
  icon: 'https://cdn.malekai.network/images/powers/dagger-spin-3.png'
};
