exports.power = {
  name: 'Oath of Will',
  sources: [
    { type: 'class', id: 'knight' }
  ],
  type: 'Non-Aggressive',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 1,
  range: '',
  next_chain: [],
  previous_chain: ['noble-blood'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Vowing never to surrender, you recover 36 Stamina over 3 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/oath-of-will.png'
};
