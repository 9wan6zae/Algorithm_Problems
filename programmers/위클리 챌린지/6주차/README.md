**출처**

level 1   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/85002)

**풀이**

이 문제를 풀어서 새로 알게 된 점은 `sort`를 `if`를 쓰지 않고 `||`를 이용해서도 할 수 있다는 점이었습니다. 처음 이 문제를 boxer에 관한 객체 배열을 만든 후 `sort`를 사용해 문제를 풀었으나, 코드가 난잡하다는 느낌이 들었습니다. programmers 내 다른 사람의 풀이를 보고 다시 풀었습니다.

우선 최대한 함수형 프로그래밍의 느낌이 나도록 코드를 수정하였습니다. 이전엔 `boxers`라는 객체 배열을 만들었으나, 새로 푼 풀이에선 `head2head` 배열에 `map`을 이용한 방법으로 변경하였습니다. `head2head`의 한 원소에는 헤당 선수의 전적이 있으며 `N`은 경기를 치르지 않음, `W`은 이김 그리고 `L`은 패배를 의미합니다. 문제를 풀기 위한 값은 해당 선수의 `번호`, `승률`, `자기보다 무거운 선수를 이긴 횟수` 그리고 `자신의 몸무게`입니다.
```js
head2head.map((h, i) => h.split('').reduce((acc, v, j) => {
      acc.win += v === 'W' ? 1 : 0
      acc.above += v === 'W' ? weights[i] < weights[j] ? 1 : 0 : 0
      acc.games += v !== 'N' ? 1 : 0
      acc.percent = acc.win / acc.games
      return acc
  }, {i: i + 1, win: 0, above: 0, games: 0, percent: 0, weight: weights[i]}))
```
위와 같이 코드를 구성하면 구하고자 하는 값들을 모두 구할 수 있습니다. 이제 이것을 이용해 정렬을 한 후 `i`를 뽑으면 문제를 해결할 수 있습니다.

정렬은 `sort` 메서드를 사용합니다. 정렬의 우선 순위는 `승률이 높은 순`, `자기보다 무거운 선수를 이긴 횟수가 높은 순`, `자신의 몸무게가 높은 순` 그리고 `번호이 빠른 순` 입니다. 번호의 경우에는 이미 빠른 순으로 정렬이 되어 있기 때문에 무시하고 진행해도 무관합니다. 이를 이용해 정렬 함수를 구성하면,
```js
.sort((a, b) => 
      b.percent - a.percent ||
      b.above - a.above ||
      b.weight - a.weight
```
이와 같이 됩니다. 이번 문제를 통해 `||`를 이용해서도 정렬할 수 있다는 것을 알게되었습니다. 그 다음엔 정렬된 순서대로 선수의 번호를 출력하면 됩니다. 전체 코드는 아래와 같습니다.

```js
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
```
