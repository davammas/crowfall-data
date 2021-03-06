exports.power = {
  name: 'Demolish Armor',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-axes' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 17
  },
  tooltip: 'Demolish an enemy\'s Physical armor causing 120 - 163 + 142% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/demolish-armor.png'
};
