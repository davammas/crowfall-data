exports.power = {
  name: 'Hit Me',
  sources: [
    { type: 'discipline', sub_type: 'minor', id: 'eminently-punchable' }
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
  tooltip: 'Irritate your ennemies by recovering Resource when they hit you with non-periodic damage.',
  icon: 'https://cdn.malekai.network/images/powers/hit-me.png'
};
