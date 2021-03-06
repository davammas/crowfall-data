exports.power = {
  name: 'Healing Rain',
  sources: [
		{ type: 'class', id: 'druid' }
  ],
  type: 'Non-Aggressive',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Area',
  max_targets: 5,
  range: '',
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 96
  },
  tooltip: 'Blanket the targeted area with Life energy, instantly healing 27 to 33 + 30% Weapon Damage. This Power generates a High amount of Essence',
  icon: 'https://cdn.malekai.network/images/powers/healing-rain.png'
};
