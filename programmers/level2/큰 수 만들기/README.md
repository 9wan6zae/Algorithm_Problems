**출처**

[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42883)

**풀이**

1. 숫자들을 담을 공간인 `stack`을 만듭니다.
2. `numbers`의 길이만큼 반복합니다.
   1. `numbers`의 원소 `pivot`을 선언합니다.
   2. `k>0`이고 `stack`의 끝 값이 `pivot`보다 작을 때까지 반복합니다.
      1. 이 경우일 때 `stack.pop()`하고 `k`를 하나 줄입니다. 즉, `pivot`보다 작은 값들을 `stack`에서 제거합니다.
   3. 제거를 다한 후 `pivot` 값은 `stack.push()`합니다.
3. 만약, 위 과정이 끝나고도 `k` 값이 남아있을 수 있기 때문에 `stack.splice(stack.length - k, k)`를 통해 `stack` 배열의 뒤를 제거합니다.
4. `stack.join('')`을 통해 배열을 문자열로 변경 후 반환합니다.