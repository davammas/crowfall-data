exports.power = {
  name: 'Throw Hurlbat',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: 1.1,
  cooldown: 24,
  targeting: 'Reticle',
  max_targets: 1,
  range: '',
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Throw a projectile forward, dealing 113 - 153 + 133% Weapon Damage as Piercing Damage. Applies a 50% movement speed reduction to those hit.',
  icon: 'https://cdn.malekai.network/images/powers/throw-hurlbat.png'
};
