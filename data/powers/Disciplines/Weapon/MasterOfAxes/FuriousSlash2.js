exports.power = {
  name: 'Furious Slash 2',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-axes' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: ['furious-slash'],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: 'Slash furiously at an enemy for 113 - 152 + 132% Weapon Damage while reducing your short and long cooldown times.',
  icon: 'https://cdn.malekai.network/images/powers/furious-slash-2.png'
};
