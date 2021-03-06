**문제설명**

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

**제한사항**

- numbers의 길이는 2 이상 100 이하입니다.
  - numbers의 모든 수는 0 이상 100 이하입니다.


**입출력 예**<br/>
|numbers|result|
|-|-|
|[2,1,3,4,1]|[2,3,4,5,6,7]|
|[5,0,2,7]|[2,5,7,9,12]|<br/>

<br/>

**입출력 예에 대한 설명**<br/>

**입출력 예 #1**

- 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
- 3 = 2 + 1 입니다.
- 4 = 1 + 3 입니다.
- 5 = 1 + 4 = 2 + 3 입니다.
- 6 = 2 + 4 입니다.
- 7 = 3 + 4 입니다.

따라서 `[2,3,4,5,6,7]` 을 return 해야 합니다.

**입출력 예 #2**

- 2 = 0 + 2 입니다.
- 5 = 5 + 0 입니다.
- 7 = 0 + 7 = 5 + 2 입니다.
- 9 = 2 + 7 입니다.
- 12 = 5 + 7 입니다.

따라서 `[2,5,7,9,12]` 를 return 해야 합니다.

<hr/>

**문제풀이**<br/>

문제를 풀기 위해선 아래의 3가지를 해결하면 된다고 생각했습니다.   
1. `numbers`에서 두 개를 뽑아서 더한 후 저장하기
2. 저장한 객체에서 중복값 제거
3. 중복값 제거한 객체 정렬하기

**1번**은 2중 for문을 이용하여 해결했습니다. 바깥 for문은 인덱스 0부터 `numbers.lenght - 1`만큼 반복합니다. 그 이유는 마지막 `numbers` 원소를 뒤에 더할 것이 없기 때문입니다.
안쪽의 for문은 바깥 인덱스 + 1부터 `numbers.length`만큼 반복합니다.
두 수의 덧셈을 저장하는 배열을 `sums`라고 할 때 `sums.push(numbers[i] + numbers[j])`를 반복했습니다.

**2번**은 중복을 제거하는 가장 간단한 방법인 배열을 `Set` 객체로 변환하는 것이기에 `Set` 객체로 변환했습니다.

**3번**은 `Set` 객체를 정렬시키면 되기 때문에 배열로 변환 후 `sort` 메서드로 오름차순으로 정렬했습니다.
```javascript
answer = [...set].sort((a, b) => {return a - b});
```