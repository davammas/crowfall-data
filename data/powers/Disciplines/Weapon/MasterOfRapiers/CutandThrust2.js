exports.power = {
  name: 'Cut and Thrust 2',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-pistols' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['cut-and-thrust'],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Penetrate an enemy\'s Block or Parry Stunning them and inflicting 70 - 95 + 83% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/cut-and-thrust-2.png'
};
