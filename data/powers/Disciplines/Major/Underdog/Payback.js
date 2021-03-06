exports.power = {
  name: 'Payback',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'underdog' }
  ],
  type: 'Buff',
  cast_type: 'Passive',
  duration: 30,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Get even with your opponents after using a Retaliate ability by increasing your Critical Hit Chance by 50 for 30 seconds or until you crit three times.',
  icon: 'https://cdn.malekai.network/images/powers/payback.png'
};
