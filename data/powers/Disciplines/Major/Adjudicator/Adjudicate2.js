exports.power = {
  name: 'Adjudicate 2',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'adjudicator' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['adjudicate'],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Judge an enemy inflicting 76-103 + 90% Holy Weapon Damage and cannot be imitgated normally.',
  icon: 'https://cdn.malekai.network/images/powers/adjudicate-2.png'
};
