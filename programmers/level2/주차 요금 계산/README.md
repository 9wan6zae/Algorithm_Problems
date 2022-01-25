**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/92341)
<br>

**풀이**<hr>
문제를 풀기 위한 요구사항을 확인해보면 아래와 같습니다.
- 자동차 번호는 중복되는 경우가 없다
-  같은 시각에, 같은 차량번호의 내역이 2번 이상 나타내지 않습니다.
-  주차장에 없는 차량이 출차되는 경우는 없습니다.
-  주차장에 이미 있는 차량(차량번호가 같은 차량)이 다시 입차되는 경우는 없습니다.

자동차 번호를 `key`로 가지는 객체를 만들면 문제를 손쉽게 풀 수 있을 것 같습니다. 자료구조는 `Map`을 사용할 예정인데, 그 이유는 자동차 번호가 작은 순대로 정렬을 해야하기 때문에 열거를 하지 못하는 `{}`보다 문제를 풀기 수월하다고 생각했습니다.

자동차 번호별 머문 시간을 기록하는 변수 `spendTime`을 선언합니다.
``` js
const spendTime = new Map()
```

`records`를 순회하면서 `IN`이면 마지막 `IN` 시간을 기록합니다. `OUT`이면 `spendTime`을 갱신합니다.

``` js
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
```
`isOut`은 하루가 지났는데도 출차하지 않은 경우를 확인하기 위한 만든 변수입니다.

`Map`을 정렬하기 위해 `entries()`를 사용하고, 자동차 번호인 `key`로 정렬해줍니다. 그리고 `flatMap`을 이용해 필요한 데이터만 남게 합니다. 마지막으로 `isOut`이 `false`이면 마지막 입차 시간과 `23:59` 사이의 시간을 계산해 `spendTime`을 갱신하고, 주어진 `fees`를 이용해 비용을 계산해 반환합니다.

``` js
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
```
