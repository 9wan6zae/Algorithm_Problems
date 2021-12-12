**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/72412)
<br>

**풀이**<hr>
처음 생각했던 건 `info`를 순회하며 후보자를 배열로 저장한 후 `query`를 순회하며 조건에 부합하는 사람 수를 반환하는 것이었습니다. 하지만, 이 방법을 했을 때 효율성 측면에서 시간초과가 발생했습니다.

**이전 코드**
```js
function solution(info, query) {
    var answer = [];
    
    const candidate = []
    
    info.forEach(person_info => {
        const [lan, type, career, food, score] = person_info.split(' ')
        candidate.push({
            lan, type, career, food, score
        })
    })
    
    query.forEach(q => {
        const [lan, type, career, food, score] = q.split(' ').filter(v => v !== 'and')
        let cnt = 0
        for (let i = 0; i < candidate.length; i++) {
            const same_lan = (lan === '-' || lan === candidate[i].lan)
            const same_type = (type === '-' || type === candidate[i].type)
            const same_career = (career === '-' || career === candidate[i].career)
            const same_food = (food === '-' || food === candidate[i].food)
            const over_score = +candidate[i].score >= +score
            if (same_lan && same_type && same_career && same_food && over_score) {
                cnt += 1
            }
        }
        answer.push(cnt)
    })
    
    return answer;
}
```

이 문제를 풀기 위해 `query`를 순회하는 것은 시간이 오래 걸린 다는 것을 알게 되었고 배열이 아닌 `key`를 통해 한 번에 찾을 수 있어야 한다고 생각해 객체로 수정하기로 했습니다. `key`는 `info`의 특정 원소를 이용해 나올 수 있는 모든 조합으로 각각 만들면 시간을 더 단축할 수 있을 것이라고 생각했습니다.   
예를 들어, `java backend junior pizza`이면
- `javabackendjuniorpizza`
- `-backendjuniorpizza`
- `--juniorpizza`

식으로 `key`를 만들어 `value`로 점수를 담는 배열이 있게 하였습니다. 그리고 점수의 개수를 보다 빨리 구할 수 있게 `이진 검색`을 이용했습니다.