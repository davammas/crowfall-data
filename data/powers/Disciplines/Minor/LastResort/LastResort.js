exports.power = {
  name: 'Last Resort',
  sources: [
    { type: 'discipline', sub_type: 'minor', id: 'last-resort' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 15,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Put it all on the line increasing your critical hit chance by 50% when your Health drops below 25%',
  icon: 'https://cdn.malekai.network/images/powers/last-resort.png'
};
