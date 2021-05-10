function solution(str1, str2) {
  var answer = 0;
  
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  
  const splitted_str1 = split_str(str1);
  const splitted_str2 = split_str(str2);
  
  if (!splitted_str1.length && !splitted_str2.length) {
      return 65536;
  }
  
  let intersection = 0;
  let sum = 0;
  
  const set = new Set([...splitted_str1, ...splitted_str2]);
  
  set.forEach((v) => {
      const match_rate_str1 = splitted_str1.filter((s) => s === v).length;
      const match_rate_str2 = splitted_str2.filter((s) => s === v).length;
      
      sum += Math.max(match_rate_str1, match_rate_str2);
      intersection += Math.min(match_rate_str1, match_rate_str2);
      
  })
  
  answer = Math.floor((intersection / sum) * 65536)
  
  return answer;
}

function split_str(str) {
  const regEx = /^[a-zA-Z]+$/;
  const split_str = [];
  
  for (let i = 0; i < str.length - 1; i++) {
      const substr = str.substr(i, 2);
      if (regEx.test(substr)) {
          split_str.push(substr)
      }
  }
  return split_str;
}