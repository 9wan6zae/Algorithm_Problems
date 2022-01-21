function solution(id_list, report, k) {
    report = [...new Set(report)].map(info => info.split(' '))
    const reportCount = {}
    const reportHistory = {}
    
    report.forEach(info => {
        reportCount[info[1]] = reportCount[info[1]] + 1 || 1
    })
    
    report.forEach(info => {
        if (reportCount[info[1]] >= k) {
            reportHistory[info[0]] = reportHistory[info[0]] + 1 || 1
        }
    })
    
    return id_list.map(id => reportHistory[id] || 0)
}