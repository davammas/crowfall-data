exports.power = {
  name: 'Thornshield',
  sources: [
    { type: 'discipline', sub_type: 'minor', id: 'thornshield' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 20,
  cooldown: 45,
  targeting: 'Self',
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Envelope yourself with dangerous Thorns for 20 seconds causing any who strike you to take damage.',
  icon: 'https://cdn.malekai.network/images/powers/thornshield.png'
};
