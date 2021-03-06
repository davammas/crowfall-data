exports.power = {
  name: 'Kick Sand',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 30,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['spinning-backfist'],
  cost: {
    pips: 0,
    resource: 14
  },
  tooltip: 'Kick sand at nearby enemies, blinding them for 4 seconds while dealing 151 - 205 + 178% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/kick-sand.png'
};
