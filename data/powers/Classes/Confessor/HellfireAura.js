exports.power = {
  name: 'Hellfire Aura',
  sources: [
    { type: 'class', id: 'confessor' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 10,
  cooldown: 24,
  targeting: 'Sphere',
  max_targets: 5,
  range: 3.6,
  next_chain: ['fire-tornados'],
  previous_chain: ['hellfire-shield'],
  cost: {
    pips: 0,
    resource: 80
  },
  tooltip: 'Consumes your Hellfire Shield and surrounds you in a pulsing Hellfire Aura which damages all players within 4m of you every second for 15 - 18 Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/hellfire-aura.png'
};
