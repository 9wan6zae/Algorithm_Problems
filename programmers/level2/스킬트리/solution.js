function solution(skill, skill_trees) {
  var answer = 0
  const reg = new RegExp(`[^${skill}]`, 'g')
  
  answer = skill_trees
      .map(skill_tree => skill_tree.replace(reg, ''))
      .filter(skill_tree => skill.indexOf(skill_tree) === 0).length
  
  return answer
}