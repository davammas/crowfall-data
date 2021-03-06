exports.power = {
  name: 'Gore',
  sources: [
    { type: 'class', id: 'myrmidon' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 20,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5.5,
  next_chain: [],
  previous_chain: ['bloodied-swipe'],
  cost: {
    pips: 0,
    resource: 23
  },
  tooltip: 'Strike overhead with both axes before continuing the carnage with a second bloody slice, inflicting 63 - 77 + 70% Weapon Damage for each hit. If you connect, recover 5 Fury per second for 20 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/gore.png'
};
