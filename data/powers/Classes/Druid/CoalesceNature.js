exports.power = {
  name: 'Coalesce Nature',
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
  next_chain: [],
  previous_chain: ['coalesce-life-2'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Manifest an Orb at your targeted location that allies or you may use to heal 216 to 264 + 240% Weapon Damage as well as restoring resources for allies.',
  icon: 'https://cdn.malekai.network/images/powers/coalesce-nature.png'
};
