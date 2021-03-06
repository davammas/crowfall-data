exports.power = {
  name: 'Rapid Fire (Ranger)',
  sources: [
    { type: 'class', id: 'ranger' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Hold Channeled',
  duration: 2,
  cooldown: 9,
  targeting: 'Reticle',
  max_targets: 1,
  range: 40,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Hold to shoot up to 10 arrows towards your reticle that deal 40 - 54 + 47% Weapon per arrow.  Adds 10 Critical Hit Change for 2 seconds for each arrow that doe not critically hit, effect is removed when you land a critical hit.',
  icon: 'https://cdn.malekai.network/images/powers/rapid-fire-ranger.png'
};
