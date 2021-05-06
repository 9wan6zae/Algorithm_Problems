function solution(s) {
    var answer = 0;
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const isEmpty = !stack.length;
        const isSame = stack[stack.length - 1] === s[i];
        
        if (isEmpty || !isSame) stack.push(s[i]);
        else stack.pop();
    }
    answer = !stack.length ? 1 : 0;

    return answer;
}