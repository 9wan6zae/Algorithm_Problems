**출처**<hr>
level 1   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/92334)
<br>

**풀이**<hr>
신고를 받은 아이디를 관리하는 객체 `reportList`를 `id_list`의 `id`를 키로 가지고 배열을 값으로 가지게 초기화합니다. `report`를 순회하면서 신고를 받은 아이디를 키로 사용한 `reportList`의 값에 신고한 사람의 아이디를 추가합니다. 이 때 `!reportList[reportId].includes(userId)`를 이용해 이미 포함되었는지 확인합니다.

`reportList`에서 `k`보다 큰 배열을 가지는 것이 정지를 먹기 때문에 신고당한 사람을 신고한 사람의 수를 뽑아 answer 배열을 만들어 반환합니다.

``` js
for (const key in reportList) {
      if (reportList[key].length >= k) {
          reportList[key].forEach(id => {
              answer[id_list.indexOf(id)] += 1
          })
      }
  }
```