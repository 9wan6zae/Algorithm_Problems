function solution(places) {
  return places.map((place) => {
      return place.some((row, i) => {
          return row.split('').some((char, j, arr) => {
              const personCount = [
                  arr[j - 1] || null,
                  arr[j + 1] || null,
                  (place[i - 1] || '').charAt(j),
                  (place[i + 1] || '').charAt(j)
              ].filter(v => v === 'P').length
              
              if ((char === 'P' && personCount > 0) || (char === 'O' && personCount === 2)) return true
              return false
          })
      }) ? 0 : 1
  })
}