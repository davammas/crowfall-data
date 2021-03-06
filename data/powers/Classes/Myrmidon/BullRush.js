exports.power = {
  name: 'Bull Rush',
  sources: [
    { type: 'class', id: 'myrmidon' }
  ],
  type: 'Crowd Control',
  cast_type: 'Hold Channeled',
  duration: 0,
  cooldown: 9,
  targeting: 'Rectangle',
  max_targets: 3,
  range: 7,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 33
  },
  tooltip: 'Charge forward dragging enemies along with you and causing 82 - 100 + 91% Weapon Damage. Enemies are flung into the air if the attack is over 65% charged.',
  icon: 'https://cdn.malekai.network/images/powers/bull-rush.png'
};
