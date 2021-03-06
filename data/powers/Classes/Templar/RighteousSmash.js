exports.power = {
  name: 'Righteous Smash',
  sources: [
    {
      type: 'class',
      id: 'templar'
    }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: ['castigate'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Spin with an overhead chop hitting multiple enemies for 117 - 176 + 146% Weapon Damage and generating Righteousness for each hit.',
  icon: 'https://cdn.malekai.network/images/powers/righteous-smash.png'
};
