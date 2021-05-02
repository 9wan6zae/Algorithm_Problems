function solution(lottos, win_nums) {
    var answer = [];
    let bestCase = 0;
    let worstCase = 0;
    for (let i in lottos) {
        const lotto_num = lottos[i];
        let hasNumber = win_nums.indexOf(lotto_num) != -1 ? true : false;
        if (hasNumber) {
            worstCase++;
            bestCase++;
        }
        else if (lotto_num === 0) {
            bestCase++;
        }
    }
    const bestRanking = get_rank(bestCase);
    const worstRanking = get_rank(worstCase);
    answer = [bestRanking, worstRanking];
    return answer;
}

function get_rank(n) {
    let rank = 0;
    if (n == 0 || n == 1) {
        rank = 6;
    } else {
        rank = 7 - n;
    }
    return rank;
}
