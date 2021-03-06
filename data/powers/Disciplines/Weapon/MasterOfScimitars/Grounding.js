exports.power = {
  name: 'Grounding',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-scimitars' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 45,
  targeting: 'Group',
  max_targets: 5,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Protect group members and yourself with increased Electricity Armor.',
  icon: 'https://cdn.malekai.network/images/powers/grounding.png'
};
