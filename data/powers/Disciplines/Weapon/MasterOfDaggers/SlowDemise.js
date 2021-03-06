exports.power = {
  name: 'Slow Demise',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-daggers' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['slow-demise-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Stick an enemy for 85 - 115 + 100% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/slow-demise.png'
};
