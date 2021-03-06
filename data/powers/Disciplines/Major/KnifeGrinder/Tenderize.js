exports.power = {
  name: 'Tenderize',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'knife-grinder' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['tenderize-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Slice an enemy for 68 - 92 + 80% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/tenderize.png'
};
