exports.power = {
  name: 'Mithradatism',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'poisoner' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Self',
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Remove all Poison effects from yourself.',
  icon: 'https://cdn.malekai.network/images/powers/mithradatism.png'
};
