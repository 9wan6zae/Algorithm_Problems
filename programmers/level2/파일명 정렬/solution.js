function solution(files) {
  var answer = [];
  
  files.sort((a, b) => {
      const headA = a.match(/^\D+/)[0].toLowerCase()
      const headB = b.match(/^\D+/)[0].toLowerCase()
      
      const numberA = +a.match(/\d+/)[0].substr(0, 5)
      const numberB = +b.match(/\d+/)[0].substr(0, 5)
      
      if (headA < headB) return -1
      if (headA > headB) return 1
      return numberA - numberB
  })
  
  answer = files
  
  return answer;
}