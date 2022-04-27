**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42628)
<br>

**풀이**<hr>

`Array`의 `pop`, `shift` 그리고 `sort` 메서드를 이용해 문제를 해결했습니다. 입력으로 주어지는 `operations`에서 `I`는 입력, `D`는 삭제이기 때문에 `I` 명령어에는 뒤에 따라오는 값을 배열에 넣고 정렬하고 `D`명령어는 `1`이면 `pop` 그리고 `-1`이면 `shift` 메서드를 호출했습니다.

배열이 비었다면 `[0, 0]`을 그렇지 않다면 `[queue.pop(), queue.shift()]`를 반환하도록 했습니다.