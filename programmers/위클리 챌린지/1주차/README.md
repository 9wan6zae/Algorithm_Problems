**출처**

level 1   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/82612)

**풀이**

N번 째 이용한다면 원래 이용료의 N배를 받습니다. 금액이 3일 때 4변 이용한다면 `3 * (1 + 2 + 3 + 4) = 30`이 됩니다. 즉, 1에서 `count`까지의 합을 `price`와 곱하고 그 값을 `money`와 뺍니다. 만약 모자르지 않다면, 즉 뺀 값이 음수라면 0을 반환합니다.

1부터 `count`의 합은 가우스 합을 이용하였습니다.

```js
let answer = Math.max((count * (count + 1) / 2) * price - money, 0);
return answer
```