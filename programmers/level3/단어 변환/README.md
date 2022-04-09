**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/43163)
<br>

**풀이**<hr>
한 단어가 한 개의 알파벳만 바꿨을 때 변할 수 있는 단어가 `words`에 있으면 이를 후보로 둔 후 후보가 된 단어도 한 개의 알파벳만 바꿔가며 후보를 구하면서 원하는 `target`이 되는지 확인합니다. 이때 몇 번 변화되는지를 반환하면 됩니다. 하나에서 여러 가지로 갈라지며 그 중 하나를 골라 이때의 depth를 반환하면 되는 문제이므로 `BFS`를 이용해 문제를 풀었습니다.

`BFS`는 `queue`가 필요하므로 자료구조를 만들어야 하지만, 단어의 개수가 적기 때문에 `Array`로 만들어도 무방하다고 판단해 `Array`로 `queue`를 만들었습니다. 그리고 사용한 단어를 확인하기 위한 `visited`를 변수를 두었습니다.

``` js
const visited = []
const queue = []
```

`target`이 `words`에 없을 경우엔 변환할 수 없으므로 이땐 0을 반환하도록 했습니다.

``` js
if (!words.includes(target)) return 0
```

첫 단어와 카운트를 배열로 담아 `queue`에 담습니다.

``` js
queue.push([begin, 0])
```

`queue`에 원소가 있을 때까지 아래의 동작을 반복합니다.
1. `queue`의 첫 번째 원소를 꺼냅니다.
2. `visited`에 꺼낸 원소의 단어를 넣습니다.
3. 만약 해당 단어가 `target`이라면 카운트를 반환하고 반복문을 종료합니다.
4. `words`를 순회하며 꺼낸 원소의 단어와 한 글자만 차이나는 단어를 찾아 `queue`에 넣습니다.

이 과정을 코드로 구현하면 아래와 같습니다.

``` js
while(queue) {
    const [word, level] = queue.shift()
    visited.push(word)
    
    if (word === target) {
        return level
    }
    
    words.forEach((_word) => {
        let diff = 0
        
        if (visited.includes(_word)) return
        
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== _word[i]) diff++
        }
        
        if (diff === 1) {
            queue.push([_word, level + 1])
        }
    })
}
```