exports.power = {
  name: 'Blast of Leaves',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'dryad' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 20,
  targeting: 'Rectangle',
  max_targets: 5,
  range: 7.5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 70
  },
  tooltip: 'Blasts Leaves to all allies in front of you healing for 102 - 138 + 120% Weapon Damage multiple times per second.',
  icon: 'https://cdn.malekai.network/images/powers/blast-of-leaves.png'
};
