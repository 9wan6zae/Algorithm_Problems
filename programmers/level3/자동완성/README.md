**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/17685?language=javascript)
<br>

**풀이**<hr>
자동완성에 알맞은 자료구조인 `Trie`를 구현해 개발하였습니다. 특정 단어의 몇 번째 문자까지 입력되었을 때 해당 단어가 자동완성되는지를 구하는 문제이기 때문에 단어를 입력할 때 `count`라는 변수를 두어 단어가 불려질 때마다 카운트를 올립니다. 만약, 카운트가 1이라면 해당 문자 뒤에 추가로 붙는 문자가 없다는 의미이므로 그 때까지의 반복된 횟수를 구해 반환하면 됩니다.

Trie 구조
``` js
class Node {
  constructor(value = '') {
      this.value = value;
      this.children = new Map();
      this.count = 0;
  }
}

class Trie {
  constructor() {
      this.root = new Node();
  }

  insert(string) {
      let currentNode = this.root;
      for (const char of string) {
          if (!currentNode.children.has(char)) currentNode.children.set(char, new Node(char));
          currentNode = currentNode.children.get(char)
          currentNode.count++;
      }
  }

  getCount(string) {
      let count = 0;
      let currentNode = this.root;
      for (const char of string) {
          count++;
          currentNode = currentNode.children.get(char);
          if (currentNode.count === 1) break;
      }

      return count;
  }
}
```

solution 함수
``` js
function solution(words) {
  const trie = new Trie();
  // 단어를 Trie에 넣는 과정
  for (const word of words) {
      trie.insert(word);
  }
  // 몇 글자까지 입력해야 하는지를 구하고 누적
  return words.reduce((acc, word) => acc + trie.getCount(word), 0)
}
```