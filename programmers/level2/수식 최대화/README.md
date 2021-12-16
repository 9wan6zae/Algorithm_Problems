**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/67257)
<br>

**풀이**<hr>
'*', '-', '+'의 3개의 연산자의 순열을 사용해서 `expression`의 연산자 우선순의를 변경한 값의 절대값의 최대값을 반환하는 문제입니다. `expression.split(/(\D)/)`을 통해 operand와 operator를 분리하고 분리된 배열에 연산자가 있으면 `eval`을 통해 계산된 값으로 대체합니다. 이 과정을 연산자 조합별로 시행해 최댓값을 구합니다.