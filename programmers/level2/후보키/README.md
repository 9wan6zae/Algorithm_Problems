**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42890)
<br>

**풀이**<hr>
이 문제를 풀기 위해 조합이 필요하다는 건 알았지만, 구현을 어떻게 해야할 지 몰라 [블로그](https://velog.io/@sqaurelu/ALGO-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%9B%84%EB%B3%B4%ED%82%A4%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-javascript)를 참고했습니다.

`relation`의 튜플에서 후보키를 만들기 위한 조합을 구합니다.
``` js
const atts = relation[0].length

let bitmasks = []

for (let i = 1; i < (1 << atts); i++) {
    let bitmask = ''
    for (let j = 0; j < atts; j++) {
        if ((i & (1 << j)) !== 0) bitmask += j
    }
    bitmasks.push(bitmask)
    bitmask = ''
}
```
이렇게 만들어진 `bitmasks`를 크기가 작은 순대로 정렬하는데, 그 이유는 크기가 작은 것에서 유일성을 가지면 나중엔 해당되는 것을 배제시키기 위해서입니다.
``` js
bitmasks.sort((a, b) => a.length - b.length)
```

`bitmasks`의 맨 앞의 것을 배열로 바꾸고 `relation`의 튜플들을 위에서 배열로 만든 `bitmask`에 대응되는 값을 뽑아 키로 만들고 `Set`에 추가합니다. 만들어진 `set`의 크기와 원래 `relation`의 길이가 같으면 유일성을 가지는 것이므로 이 경우일 때 `answer`를 증가시키고 이 때 사용된 `bitmask`의 원소가 포함된 다른 `bitmask`를 제거합니다.

``` js
while(bitmasks.length) {
    const bitmask = bitmasks.shift().split('').map(Number)
    const set = new Set()
    
    relation.map(tuple => {
        let candidate = ''
        for (let bit of bitmask) {
            candidate += tuple[bit]
        }
        set.add(candidate)
    })
    if (set.size === relation.length) {
        answer += 1
        bitmasks = bitmasks.filter(_bitmask => !bitmask.every(bit => _bitmask.includes(bit)))
    }
}
```

비트 연산자를 이용해 조합을 구하는 것이 신기했고, 이런 방법으로 구현하는 것이 놀라웠습니다. 많이 배워야 겠습니다..