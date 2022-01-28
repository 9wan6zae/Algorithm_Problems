**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/92335)
<br>

**풀이**<hr>
Javascript에서 숫자를 특정 진수로 바꾸는 가장 간단한 방법인 `n.toString(k)`이기 때문에 이것을 이용했습니다. 숫자가 `n`이고 진수가 `k`일 때 사용하면 특정 숫자를 원하는 진수로 변한한 값이 `String` 타입으로 반환됩니다. 문제에선 0을 기준으로 나눈 값이 소수인지 확인하면 되기 때문에, 변환된 문자열을 `split('0')`한 후 분열된 값들을 숫자로 변환해줬습니다.
``` js
const arr = n.toString(k).split('0').map(v => +v)
```

소수인지 판별하는 함수인 `isPrime()`을 선언하고 가장 흔하게 사용하는 방법으로 구현했습니다.
``` js
const isPrime = (num) => {
    if(!num || num === 1) return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
```

그리고 `arr`에 `filter`를 이용해 소수인 값을 고르고 그 길이를 반환해 문제를 해결했습니다.
``` js
return arr.filter(v => isPrime(v)).length;
```