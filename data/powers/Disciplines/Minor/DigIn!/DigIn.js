exports.power = {
  name: 'Dig In',
  sources: [
    { type: 'discipline', sub_type: 'minor', id: 'dig-in' }
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
  tooltip: 'When dropping below 25% Health you become immune to being Critically Hit.',
  icon: 'https://cdn.malekai.network/images/powers/dig-in.png'
};
