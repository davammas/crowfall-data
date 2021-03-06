exports.power = {
  name: 'Free Action',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'escape-artist' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 5,
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
  tooltip: 'Liberate group members and yourself gaining immunity to Movement Crowd Control effects for 5 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/free-action.png'
};
