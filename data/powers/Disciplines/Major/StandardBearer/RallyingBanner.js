exports.power = {
  name: 'Rallying Banner',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'standard-bearer' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 45,
  targeting: 'Area',
  max_targets: 5,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Fortify nearby group members with a banner increasing Attack Power by 200, healing those under 35% Health and removing Slow effects.',
  icon: 'https://cdn.malekai.network/images/powers/rallying-banner.png'
};
