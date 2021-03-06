exports.power = {
  name: 'Execute',
  sources: [
    { type: 'class', id: 'templar' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['judgement'],
  cost: {
    pips: 0,
    resource: 1
  },
  tooltip: 'Slash without remorse dealing 135 - 202 + 168% Weapon Damage. Enemies under 35% health are critically hit for 202 - 300 + 167% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/execute.png'
};
