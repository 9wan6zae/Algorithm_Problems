**문제설명**

어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

**제한사항**
- absolutes의 길이는 1 이상 1,000 이하입니다.
  - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
- signs의 길이는 absolutes의 길이와 같습니다.
  - `signs[i]` 가 참이면 `absolutes[i]` 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

**입출력 예**<br/>
|absolutes|signs|result|
|-|-|-|
|[4,7,12]|[true,false,true]|9|
|[1,2,3]|[false,false,true]|0|
<br/>

**입출력 예 설명**

입출력 예 #1

- signs가 `[true,false,true]` 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
- 따라서 세 수의 합인 9를 return 해야 합니다.

입출력 예 #2

- signs가 `[false,false,true]` 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
- 따라서 세 수의 합인 0을 return 해야 합니다.
<br/>
<hr/>
<br/>

**문제풀이**<br/>

이 문제는 `reduce`의 사용법을 알고 있으면 편하게 풀 수 있는 문제입니다. 따라서, 문제 풀이에 앞서 `reduce`의 사용법에 대해 작성하겠습니다.
`reduce` 메서드는 일반적인 경우 배열의 덧셈에서 많이 활용이 됩니다. 사용법은 아래와 같습니다.
```javascript
let result = arr.reduce((누적값, 현재값, 인덱스) => {return 결과값}, 초기값)
```
누적값을 계속 갱신하면서 `result`를 구하는 것이 `reduce` 메서드입니다. 이를 이 문제에 적용하면 문제를 쉽게 풀 수 있게 됩니다.

`absolutes`의 원소들을 계속 더하고 이를 `answer`로 반환을 합니다.
```javascript
answer = absolutes.reduce((acc, cur) => {
  return acc + cur;
}, 0)
```
하지만 `absolutes`의 특정 인덱스의 원소에 대응하는 부호는 `signs`에 있으로 이를 이용하기 위해 `index`를 추가해서 부호를 정해줍니다. 부호는 삼항 연산을 이용했습니다.
```javascript
answer = absolutes.reduce((acc, cur, i) => {
  const sign = signs[i] ? 1 : -1;
  return acc + cur * sign;
}, 0)
```
이 방식으로 인해 부호를 결정받은 `absolutes`의 원소를 더할 수 있게 되서 `answer`를 구할 수 있게 됩니다.