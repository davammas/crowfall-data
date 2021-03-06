exports.power = {
  name: 'Reverberating Blow',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-maces' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 24,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 11
  },
  tooltip: 'Afflict an enemy with an aura causing other nearby enemies to suffer 15 - 20 + 18% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/reverberating-blow.png'
};
