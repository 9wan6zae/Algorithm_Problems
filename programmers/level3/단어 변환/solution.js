function solution(begin, target, words) {
    const visited = []
    const queue = []
    
    // 변환할 수 없는 경우
    if (!words.includes(target)) return 0
    
    queue.push([begin, 0])
    
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
}