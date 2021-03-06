exports.power = {
  name: 'Festering Wounds',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'plague-lord' }
  ],
  type: 'Debuff',
  cast_type: 'Charged',
  duration: 0,
  cooldown: 45,
  targeting: 'Ray',
  max_targets: 1,
  range: 30,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: 'Plague an enemy with Disease and for 30 seconds any Heal ability they use leaves them in an Exposed state.',
  icon: 'https://cdn.malekai.network/images/powers/festering-wounds.png'
};
