**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/67258)
<br>

**풀이**<hr>
`gems`의 일부분에 모든 종류의 보석이 존재하는 최소의 영역을 반환하는 문제입니다. `투 포인터`를 이용해 문제를 해결했습니다. 투 포인터를 구하기 위해 시작 포인터와 끝 포인터에 해당하는 `start`와 `end` 변수를 생성하고 0으로 초기화합니다. 그리고 `answer`를 0과 `gems.length`를 가지는 배열로 초기화합니다.

``` js
let answer = [0, gems.length]
let start = 0
let end = 0
```

`gems`의 모든 종류의 보석을 확인하기 위해 `Set`을 이용해 중복되는 보석을 없앤 후 `size` 프로퍼티를 통해 중복이 없는 보석의 개수를 얻고 이를 `gem_kinds` 변수에 초기화합니다. 보석의 종류 개수만 얻은 이유는 보석의 이름은 이 문제를 풀 때 필요없기 때문입니다. 두 개의 포인터 사이에 있는 보석의 이름을 키로 둔 자료구조를 만든 후 이 자료구조의 개수와 `gem_kinds`와 같다면 모든 보석이 두 개의 포인터 사이에 있다는 것을 알 수 있기 때문입니다.

``` js
const gem_kinds = new Set(gems).size
```

두 개의 포인터 사이에 있는 보석을 담는 변수를 `patial`이라고 하고 0번째 인덱스에 해당하는 보석을 담습니다. `patial`는 `Map`으로 만들고 보석의 이름을 키로 두고, 해당 보석의 개수를 값으로 가지는 자료구조입니다.

``` js
const patial = new Map()
// start 포인터에 해당하는 보석의 개수가 하나 담겼다는 의미
patial.set(gems[start], 1)

```

`start`와 `end`가 `gems` 배열의 끝에 다달았을 때 종료되는 `while` 문을 만들어서 로직을 구현합니다.

1. 일부분이 모든 종류의 보석을 가지고 있을 때
   1. 일부분의 길이가 이전 정답 후보의 길이보다 짧을 때 `answer`를 갱신한다.
   2. 다른 정답이 될 수 있는 후보가 있을 수 있으므로 `start`를 뒤로 보낸다. 즉 `gems[start]`에 해당되는 보석의 개수를 하나 줄인다.
   3. 줄어든 `start` 포인터의 보석의 개수가 0이 된다면 그 보석은 `patial` 자료구조에서 제거한다.
2. 그렇지 않을 때
   1. `end` 포인터를 뒤로 보내고
   2. `end` 포인터에 해당되는 보석을 추가한다.

이러한 로직을 이용해 코드를 작성하면 아래과 같습니다.
``` js
while (start < gems.length && end < gems.length) {
    // 일부분이 모든 종료의 보석을 가지고 있을 때
    if (patial.size === gem_kinds) {
        // 일부분이 이전 정답 후보의 길이보다 짧을 때 answer 갱신
        if (end - start < answer[1] - answer[0]) {
            answer = [start + 1, end + 1]
        }
        // 다른 정답이 될 수 있는 후보가 있을 수 있기에 start를 뒤로 미룸, 즉 start에 해당되는 보석의 개수를 하나 줄임
        patial.set(gems[start], patial.get(gems[start]) - 1)
        // 만약에 개수가 0이 되었으면 삭제
        if (patial.get(gems[start]) === 0) {
            patial.delete(gems[start])
        }
        start += 1
    } else {
        end += 1
        // end 포인터에 해당하는 보석을 추가하고, 이전의 보석이 있었다면 그 개수를 그렇지 않으면 0을 추가한다.
        patial.set(gems[end], 1 + (patial.get(gems[end]) || 0))
    }
}
```

이렇게 만들어진 `answer`를 반환해 문제를 해결했습니다.