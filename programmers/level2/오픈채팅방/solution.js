function solution(record) {
    const users = {}
    const history = []
    const message = ([command, uid]) => {
        return `${users[uid]}님이 ${command === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`
    }
    record.forEach((v) => {
        const [command, uid, nickname] = v.split(' ')

        if (command !== 'Change') {
            history.push([command, uid])
        }
        if (nickname) users[uid] = nickname
    })
    return history.map(v => message(v))
}