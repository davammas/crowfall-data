exports.power = {
  name: 'Multi-Fireball',
  sources: [
    { type: 'class', id: 'confessor' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: '',
  cooldown: '',
  targeting: 'Reticle',
  max_targets: 1,
  range: 25,
  next_chain: [],
  previous_chain: ['fireball-2'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Shoots 3 fireballs towards your reticle that explodes for 35 - 53 + 44% Weapon Damage as Fire Damage. Applies Sin to anyone damaged.',
  icon: 'https://cdn.malekai.network/images/powers/multi-fireball.png'
};
