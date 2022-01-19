function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0)
  const reportList = {}

  id_list.forEach(id => {
      reportList[id] = []
  })

  report.forEach(info => {
      const [userId, reportId] = info.split(' ')
      if (!reportList[reportId].includes(userId)) reportList[reportId].push(userId)
  })

  for (const key in reportList) {
      if (reportList[key].length >= k) {
          reportList[key].forEach(id => {
              answer[id_list.indexOf(id)] += 1
          })
      }
  }

  return answer;
}