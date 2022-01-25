function solution(fees, records) {
  const spendTime = new Map()
  
  records.forEach(record => {
      const [time, number, type] = record.split(' ')

      const data = spendTime.get(number) || {number, lastInTime: time, isOut: false, spendTime: 0}
      
      if (type === 'IN') {
          spendTime.set(number, {
              number,
              lastInTime: time,
              isOut: false,
              spendTime: data.spendTime
          })
      } else {
          const [inHour, inMinute] = data.lastInTime.split(':')
          const [outHour, outMinute] = time.split(':')
          spendTime.set(number, {
              number,
              lastInTime: data.lastInTime,
              isOut: true,
              spendTime: data.spendTime += (outHour - inHour) * 60 + (outMinute - inMinute)
          })
      }
  })
  
  return [...spendTime.entries()]
      .sort((a, b) => a[0] - b[0])
      .flatMap(v => v[1])
      .map(car => {
          if(!car.isOut) {
              const [inHour, inMinute] = car.lastInTime.split(':')
              car.spendTime += (23 - inHour) * 60 + (59 - inMinute)
          }
          const [defaultTime, defaultCost, unitTime, unitCost] = fees
          let cost = 0
          if (defaultTime >= car.spendTime) {
              cost = defaultCost
          } else {
              cost = defaultCost + Math.ceil((car.spendTime - defaultTime) / unitTime) * unitCost
          }
          return cost
      })
}