function solution(s) {
  let zero = 0
  let cnt = 0
  while (s !== "1") {
      const remove_zero_s = s.replace(/0/g, '')
      zero += s.length - remove_zero_s.length
      s = remove_zero_s.length.toString(2)
      cnt += 1
  }
  return [cnt, zero]
}