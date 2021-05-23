function solution(new_id) {
  const answer = new_id
      .toLowerCase() // step 1
      .replace(/[^\w-.]/g, '') // step 2
      .replace(/\.+/g, '.') // step 3
      .replace(/^\.|\.$/g, '') // step 4
      .replace(/^$/, 'a') // step 5
      .slice(0, 15).replace(/\.$/, ''); // step 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}