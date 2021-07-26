**출처**

[link](https://programmers.co.kr/learn/courses/30/lessons/17684#)

**풀이**

알파벳 순서대로 인덱스를 갖는 `index` 배열을 만듭니다. 편의상 0번 인덱스에는 `_`를 넣었습니다.

입력받은 `msg`의 길이가 0이 될 때까지 아래의 동작을 반복합니다.
```js
let w = ''
let wc = ''

let i = 0

for (let i = 0; i < msg.length; i++) {
  w = msg.slice(0, i)
  wc = msg.slice(0, i+1)
  // index 배열에 wc가 없다면 w를 answer 배열에 넣고 반복문을 중지
  if (index.indexOf(wc) === -1) {
    answer.push(index.indexOf(w))
    break
  }
  // i가 msg의 마지막이라면 wc를 answer 배열에 넣음
  if (i === msg.length - 1) {
    answer.push(index.indexOf(wc))
  }
}
index.push(wc) // wc가 없는 경우 break를 통해 나오므로 wc를 index에 추가한다.
msg = msg.slice(i) // 중단된 시점부터 이후로 msg를 초기화한다.
```