function solution(n)
{
    var answer = 0;
    
    let modulo = 10
    
    while (n > 0) {
        const mod_val = n % modulo
        n = (parseInt(n / modulo))
        answer += mod_val
    }

    return answer;
}