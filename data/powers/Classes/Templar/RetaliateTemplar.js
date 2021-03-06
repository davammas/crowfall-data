exports.power = {
  name: 'Retaliate (Templar)',
  sources: [
		{ type: 'class', id: 'templar' }
  ],
  type: 'Retaliate',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 30,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Jump to your feet, damaging all nearby enemies for 53 - 80 + 67% Weapon Damage. Retaliating an enemy afflictd with Sin reduces cooldown of RETALIATE.',
  icon: 'https://cdn.malekai.network/images/powers/retaliate-templar.png'
};
