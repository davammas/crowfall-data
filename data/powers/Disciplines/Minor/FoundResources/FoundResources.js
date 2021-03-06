exports.power = {
  name: 'Found Resources',
  sources: [
    { type: 'discipline', sub_type: 'minor', id: 'found-resources' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 0,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Return to a minimum of two pips when entering stealth.',
  icon: 'https://cdn.malekai.network/images/powers/found-resources.png'
};
