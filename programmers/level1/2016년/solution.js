function solution(a, b) {
  var answer = '';
  const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
  
  let total_days = 0
  
  for (let i = 0; i < (a-1); i++) {
      total_days += dates[i]
  }
  
  total_days += b
  
  answer = day[total_days % 7]
  
  return answer;
}