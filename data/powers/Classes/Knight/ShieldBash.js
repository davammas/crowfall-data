exports.power = {
  name: 'Shield Bash',
  sources: [
    { type: 'class', id: 'knight' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: 5,
  cooldown: 0,
  targeting: 'Sphere',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'A follow-up shield attack Dazing, preventing Dodge and striking for 50 - 67 + 58% Crushing Weapon Damage. SHIELD BASH hits critically for 94 - 128 if used again with 5 seconds.  It is enabled after performing three consecutive basic attacks and when you fill your Block Meter.',
  icon: 'https://cdn.malekai.network/images/powers/shield-bash.png'
};
