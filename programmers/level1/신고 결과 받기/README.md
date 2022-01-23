**출처**<hr>
level 1   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/92334)
<br>

**풀이**<hr>
이전의 풀이에서 아쉬운 점이 있어서 수정하였습니댜. `report`에 중복인 부분이 있을 수 있기 때문에, `Set`을 이용해 중복 데이터를 제거하였습니다.
``` js
report = [...new Set(report)].map(info => info.split(' '))
```
id별 신고당한 횟수를 기록하는 `reportCount`와 id별 신고를 당한 사람이 정지를 당한 횟수인 `reportSuccess`라는 변수를 선언합니다.
``` js
const reportCount = {}
const reportSuccess = {}
```

`report`를 순회하며 `reportCount`를 갱신합니다.
``` js
report.forEach(info => {
    reportCount[info[1]] = reportCount[info[1]] + 1 || 1
})
```

`report`를 순회하며 `reportCount`가 `k`보다 큰 `id`를 신고한 사람의 `count`를 증가하며 `reportSuccess`를 갱신합니다.

``` js
report.forEach(info => {
    if (reportCount[info[1]] >= k) {
        reportSuccess[info[0]] = reportSuccess[info[0]] + 1 || 1
    }
})
```

마지막으로, `id_list`를 이용해 `id`를 `reportSuccess`의 키로 한 값들을 배열로 묶어 반환합니다.