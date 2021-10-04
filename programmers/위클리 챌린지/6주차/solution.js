function solution(weights, head2head) {
  return head2head.map((h, i) => h.split('').reduce((acc, v, j) => {
      acc.win += v === 'W' ? 1 : 0
      acc.above += v === 'W' ? weights[i] < weights[j] ? 1 : 0 : 0
      acc.games += v !== 'N' ? 1 : 0
      acc.percent = acc.win / acc.games
      return acc
  }, {i: i + 1, win: 0, above: 0, games: 0, percent: 0, weight: weights[i]}))
  .sort((a, b) => 
      b.percent - a.percent ||
      b.above - a.above ||
      b.weight - a.weight
  ).map((v) => v.i)
}