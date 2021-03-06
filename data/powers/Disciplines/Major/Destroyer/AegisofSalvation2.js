exports.power = {
  name: 'Aegis of Salvation 2',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'destroyer' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['aegis-of-salvation'],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Attack causing 76 - 103 + 89% Weapon Damage and applies a barrier to you.  When it is removed you recover 10% to 15% to your Health',
  icon: 'https://cdn.malekai.network/images/powers/aegis-of-salvation-2.png'
};
