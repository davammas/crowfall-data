exports.power = {
  name: 'Hellfire Shield',
  sources: [
    { type: 'class', id: 'confessor' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 9,
  targeting: 'Self',
  max_targets: 1,
  range: 25,
  next_chain: ['hellfire-aura', 'fire-wave'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 55
  },
  tooltip: 'Surrounds your skin an a Hellfire Shield to 15 seconds damaging all who cause damage to your for 15 - 18 damage.',
  icon: 'https://cdn.malekai.network/images/powers/hellfire-shield.png'
};
