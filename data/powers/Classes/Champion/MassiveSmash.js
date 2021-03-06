exports.power = {
  name: 'Massive Smash',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['giant-smash'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Strike in front of you for 152 - 206 + 179% Weapon Damage, generating 4 Rage if you hit. Applies Mortal Strike to all hit, which reduces the effectiveness of any Healing that target receives by 25% for 15 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/massive-smash.png'
};
