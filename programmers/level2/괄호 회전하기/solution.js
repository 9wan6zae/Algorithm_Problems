function solution(s) {
  var answer = 0;
  
  s = s.split('');
  
  const pair = {
      '{' : '}',
      '[' : ']',
      '(' : ')'
  }
  
  for (let i = 0; i < s.length; i++) {
      s.push(s.shift());
      
      const stack = [];
      
      let invalid = false;
      
      for (let j = 0; j < s.length; j++) {
          const bracket = s[j];
          
          const is_left = (bracket === '[' || bracket === '{' || bracket === '(');
          const is_right = (bracket === ']' || bracket === '}' || bracket === ')');
          
          if (is_left) {
              stack.push(bracket);
          } else if (is_right) {
              if (!stack.length) {
                  invalid = true;
                  break;
              } else {
                  const last_val = stack[stack.length - 1];
                  if (pair[last_val] === bracket) stack.pop();
                  else {
                      invalid = true;
                      break;
                  }
              }
          }
          
      }
      if (!invalid && !stack.length) answer += 1;
  }
  
  return answer;
}