exports.power = {
  name: 'Piercing Orb',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-focus' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Reticle',
  max_targets: 5,
  range: 35,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 8
  },
  tooltip: 'Conjure a slow moving doom-filled projectile that passes through enemies to damage them repeatedly for 53 - 80 + 67% Piercing Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/piercing-orb.png'
};
