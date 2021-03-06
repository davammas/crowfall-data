exports.power = {
  name: 'Weapon Oil',
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
  tooltip: 'Restore group members and yourself to full combat readiness removing and gaining immunity to Attack Crowd Control effects for 5 seconds. Weapon Oil can be used while Suppressed.',
  icon: 'https://cdn.malekai.network/images/powers/weapon-oil.png'
};
