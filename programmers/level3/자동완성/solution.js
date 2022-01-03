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

function solution(words) {
  const trie = new Trie();

  for (const word of words) {
      trie.insert(word);
  }
  
  return words.reduce((acc, word) => acc + trie.getCount(word), 0)
}