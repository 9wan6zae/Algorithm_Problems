**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12904)
<br>

**풀이**<hr>

한 글자씩 자른 문자열의 중앙을 기준으로 대칭되는 위치의 문자를 비교해 같은지를 확인합니다. 만약 하나라도 다르다면 팰린드롬이 아니게 됩니다. 예를들어 `abcdeabcde`라는 문자열이 있을 때, 처음은 전체 문자열로 체크를 하고 그 다음엔 `abcdeabcd`, `bcdeabcde` 처럼 한 글자씩 뺀 문자열로 체크를 합니다.