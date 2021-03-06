exports.power = {
  name: 'Careless Whisper',
  sources: [
    { type: 'discipline', sub_type: 'minor', id: 'careless-whisper' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 6,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'When you execute a Primary Attack which damages an enemy, you gain a stack of Whispers. If you gain 5 Whispers in 12 seconds, Empowered Whispers is applied, which increases your Critical Hit Chance by 20% and your Critical Damage by 35% for 6 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/careless-whisper.png'
};
