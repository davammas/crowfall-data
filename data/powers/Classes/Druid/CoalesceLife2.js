exports.power = {
  name: 'Coalesce Life 2',
  sources: [
		{ type: 'class', id: 'druid' }
  ],
  type: 'Non-Aggressive',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Area',
  max_targets: 1,
  range: '',
  next_chain: ['coalesce-nature'],
  previous_chain: ['coalesce-life'],
  cost: {
    pips: 0,
    resource: 46
  },
  tooltip: 'Manifest an Orb at your targeted location that allies or you may use to heal 97 to 119 + 108% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/coalesce-life-2.png'
};
