function solution(s, n) {
  var answer = '';

  const z_code = 'z'.charCodeAt()
  const Z_code = 'Z'.charCodeAt()
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') answer += ' '
      else {
          const limit = (/[a-z]/.test(s[i]) ? z_code : Z_code)
          let code = (s[i].charCodeAt() + n)
          code = code > limit ? code - 26 : code
          answer += String.fromCharCode(code)
      }
  }
  return answer;
}