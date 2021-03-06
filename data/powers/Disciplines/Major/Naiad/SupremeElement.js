exports.power = {
  name: 'Supreme Element',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'naiad' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 0,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Grants various effects based on type of incoming elemental damage. Incoming Fire damage heals you for 20% of the damage taken. Incoming Electric damage deals 10% of the damage back to the caster. Incoming Ice damage applies a stack of Phase Transition which grants Healing Modifier by 10% per stack. Maximum 3 stacks.',
  icon: 'https://cdn.malekai.network/images/powers/supreme-element.png'
};
