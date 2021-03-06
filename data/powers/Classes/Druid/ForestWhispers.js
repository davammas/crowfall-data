exports.power = {
  name: 'Forest Whispers',
  sources: [
    { type: 'class', id: 'druid' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 20,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 26
  },
  tooltip: 'While in Life Power Tray, when your Health drops below 20% gain 90% Slashing, Crushing and Piercing mitigation for 20 seconds. While in Death Tray, each Druid Power executed has a chance to make your next Druid Power cost zero essence.',
  icon: 'https://cdn.malekai.network/images/powers/forest-whispers.png'
};
