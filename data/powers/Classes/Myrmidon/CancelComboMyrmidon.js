exports.power = {
  name: 'Cancel Combo (Myrmidon)',
  sources: [
    { type: 'class', id: 'myrmidon' }
  ],
  type: 'Non-Aggressive',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: '',
  next_chain: [],
  previous_chain: ['whirlwind'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Cancels the current combo power being executed.',
  icon: 'https://cdn.malekai.network/images/powers/cancel-combo-myrmidon.png'
};
