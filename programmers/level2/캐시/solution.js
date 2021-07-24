function solution(cacheSize, cities) {
  const miss = 5
  const hit = 1
  
  if (cacheSize === 0) return cities.length * miss
  
  var answer = 0;
  const cache = []
  
  for (let i = 0; i < cities.length; i++) {
      const city = cities[i].toUpperCase()
      const idx = cache.indexOf(city)
      
      if (idx > -1) {
          answer += hit
          cache.push(cache.splice(idx, 1)[0])
      } else {
          if (cache.length >= cacheSize) cache.shift()
          answer += miss
          cache.push(city)   
      }
  }
  
  return answer;
}