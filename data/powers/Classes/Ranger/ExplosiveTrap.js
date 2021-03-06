exports.power = {
  name: 'Explosive Trap',
  sources: [
    { type: 'class', id: 'ranger' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 24,
  targeting: 'Area',
  max_targets: 5,
  range: '',
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 47
  },
  tooltip: 'Place an explosive trap at your feet which explodes when an enemy approaches it dealing 57 - 77 + 67% Weapon Damage as Fire Damage. Knocks Up all hit. Trap will exist for 60 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/explosive-trap.png'
};
