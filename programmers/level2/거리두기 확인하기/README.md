**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/81302)
<br>

**풀이**<hr>
맨헤튼 거리 2이하에 사람`P`가 하나라도 있으면 그 방은 `1` 그렇지 않으면 `0`이 되도록 합니다. 매개변수로 주어진 `places`의 구조는 아래와 같아 고차함수를 이용해 분리가 필요해 보였습니다.
```
[["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]
```
`places` 배열의 원소를 방 하나를 의미하는 배열이 있고, 그 안에는 열을 의미하는 문자열이 있습니다. 배열은 `map` 또는 `forEach`를 사용해 그 안의 원소를 확인할 수 있는데, 답으로 반환할 배열을 새로 만들어야 하기 때문에 `map`을 사용했습니다. 그리고 문자열은 `split` 메서드를 활용해 배열로 만들고 값을 확인할 겁니다.   
단 하나라도 거리를 어기는 방이 있으면 `0`이 되어야 하기 때문에 배열의 `some` 메서드를 이용해 코드를 구현했습니다. `some`은 단 하나라도 `true`이면 `true`가 되기 때문에 이 문제에서 응용하기 좋은 메서드입니다. `true`가 되는 조건은 문자가 `P`일 때 상하좌우에 `P`가 하나라도 있거나, 문자가 `O`일 때 상하좌우에 `P`가 2개일 때입니다. 코드로 설명하면
``` js
if ((char === 'P' && personCount > 0) || (char === 'O' && personCount === 2)) return true
```
이고 그렇지 않으면 `false`를 반환합니다. `personCount`는 상하좌우에 있는 `P`의 개수를 담고 있는 변수입니다. 전체적인 코드를 아래와 같습니다.
``` js
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
```