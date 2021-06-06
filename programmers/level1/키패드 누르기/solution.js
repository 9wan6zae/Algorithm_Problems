function solution(numbers, hand) {
  var answer = '';
  let left = '*';
  let right = '#';
  
  const keypads = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  
  const position = {};
  
  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
          const obj = {};
          obj.row = i;
          obj.column = j;
          position[keypads[i*3 + j]] = obj;
      }
  }
  
  const left_numbers = [1, 4, 7];
  const right_numbers = [3, 6, 9];
  
  for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (left_numbers.includes(number)) {
          answer += "L";
          left = number;
      } else if (right_numbers.includes(number)) {
          answer += "R";
          right = number
      } else {
          const left_distance = get_distance(position[left], position[number]);
          const right_distance = get_distance(position[right], position[number]);
          if (left_distance === right_distance) {
              if (hand === "right") {
                  right = number;
                  answer += "R";
              } else  {
                  left = number;
                  answer += "L";
              }
          } else if (left_distance < right_distance) {
              left = number;
              answer += "L";
          } else  {
              right = number;
              answer += "R";
          }
      }
  }
  
  return answer;
}

function get_distance(cur, target) {
  return Math.abs(cur.row - target.row) + Math.abs(cur.column - target.column);
}