exports.power = {
  name: 'Concentration',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-arcane' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 3,
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
  tooltip: 'Standing still for 3 seconds restores Mana and Zealotry every second until you move.',
  icon: 'https://cdn.malekai.network/images/powers/concentration.png'
};
