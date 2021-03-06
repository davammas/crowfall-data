exports.power = {
  name: 'Caltrops',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'agent-provocateur' }
  ],
  type: 'Crowd Control',
  cast_type: 'Ground Aimed',
  duration: 15,
  cooldown: 24,
  targeting: 'Area',
  max_targets: 5,
  range: 35,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: 'Harass enemies for 15 seconds covering the targeted area with dangerous caltrops, reducing Piercing Armor and Slowing them while maintaining Stealth.',
  icon: 'https://cdn.malekai.network/images/powers/caltrops.png'
};
