**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/17683)
<br>

**풀이**<hr>
문제를 쉽게 풀기 위해 `C# -> c`, `D# -> d`의 형식으로 변경합니다.
``` js
const replaceMelody = (melody) => {
    return melody.replace(/\w#/g, word => word[0].toLowerCase())
}
```

입력받은 `m`을 위에 선언한 함수를 통해 변경합니다.
``` js
const _m = replaceMelody(m)
```

`musicinfos`의 원소를 `[start, end, title, melody]`의 형식으로 분리하고 `melody`는 위의 함수를 이용해 변환하고 `start`와 `end`를 이용해 음악이 실행된 시간인 `runtime`을 계산합니다.
``` js
const [start, end, title, melody] = musicinfo.split(',')
const _melody = replaceMelody(melody)
const [s_h, s_m] = start.split(':')
const [e_h, e_m] = end.split(':')
const runtime = (+e_h - +s_h) * 60 + +e_m - +s_m
```

`runtime`동안 출력된 멜로디를 `stream`이라 할 때, `runtime`과 `_melody`의 몫만큼 반복하고, 나머지만큼의 `_melody`를 떼서 붙입니다.
``` js
let stream = _melody.repeat(Math.floor(runtime / _melody.length));
stream += _melody.slice(0, Math.floor(runtime % _melody.length))
```

문제를 풀기 위해 `[title, stream, runtime]`의 형식으로 반환합니다.

``` js
const _musicinfos = musicinfos.map((musicinfo) => {
    const [start, end, title, melody] = musicinfo.split(',')
    const _melody = replaceMelody(melody)
    const [s_h, s_m] = start.split(':')
    const [e_h, e_m] = end.split(':')
    const runtime = (+e_h - +s_h) * 60 + +e_m - +s_m
    let stream = _melody.repeat(Math.floor(runtime / _melody.length));
    stream += _melody.slice(0, Math.floor(runtime % _melody.length))
    return [title, stream, runtime]
})
```

반환된 배열에 중 `_m`이 있는 것을 찾고, 반환된 것이 있다면 정렬 후 첫 번째 값을 출력하고 그렇지 않으면 `(None)`을 반환합니다.
``` js
const _musicinfos = musicinfos.map((musicinfo) => {
    const [start, end, title, melody] = musicinfo.split(',')
    const _melody = replaceMelody(melody)
    const [s_h, s_m] = start.split(':')
    const [e_h, e_m] = end.split(':')
    const runtime = (+e_h - +s_h) * 60 + +e_m - +s_m
    let stream = _melody.repeat(Math.floor(runtime / _melody.length));
    stream += _melody.slice(0, Math.floor(runtime % _melody.length))
    return [title, stream, runtime]
}).filter((musicinfo) => musicinfo[1].indexOf(_m) > -1)

return _musicinfos.length ? _musicinfos.sort((a, b) => b[2] - a[2])[0][0] : '(None)'
```