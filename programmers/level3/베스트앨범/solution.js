function solution(genres, plays) {
    const hash = new Map()
    genres
        .map((genre, i) => [genre, plays[i]])
        .forEach(([genre, play], i) => {
            const data = hash.get(genre) || { total: 0, music: [] }
            hash.set(genre, {
                total: data.total + play,
                music: [...data.music, {play, i}]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            })
        })
    return [...hash.entries()]
                .sort((a, b) => b[1].total - a[1].total)
               .flatMap(v => v[1].music)
               .map(v => v.i)
}