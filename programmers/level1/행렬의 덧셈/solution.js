function solution(arr1, arr2) {
  var answer = [];
      
  answer = arr1.map((subArr, i) => {
      return subArr.map((val, j) => {
          return val += arr2[i][j]
      })
  })
  
  return answer;
}