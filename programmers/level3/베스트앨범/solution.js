function solution(genres, plays) {
  var answer = [];
  
  const hash = {};
  
  // 장르별 분류
  for (let i = 0; i < genres.length; i++) {
      if (hash[genres[i]]) {
          hash[genres[i]].push({play: plays[i], id: i})
      } else {
          hash[genres[i]] = [{play: plays[i], id: i}]
      }
  }
  
  let top2_by_genre = []
  
  for (let key in hash) {
      // 장르별 음악을 play 수로 정렬
      const songs = sort_songs(hash[key])
      
      // top2 구하기
      top2_by_genre.push(find_top_2(songs))
  }
  
  top2_by_genre = sort_songs(top2_by_genre)
  
  for (let i = 0; i < top2_by_genre.length; i++) {
      for (let j = 0; j < top2_by_genre[i].top2.length; j++) {
          answer.push(top2_by_genre[i].top2[j])
      }
  }
  
  return answer;
}

function sort_songs(songs) {
  return songs.sort((a, b) => b.play - a.play)
}

function find_top_2(songs) {
  const obj = {}
  obj.top2 = [] // 장르별 top 2
  obj.play = 0 // 장르별 총 재생 수


  // 장르별 총 재생 수 계산
  for (let i = 0; i < songs.length; i++) {
      obj.play += songs[i].play
  }

  // 장르별 top 2 계산
  const limit = Math.min(songs.length, 2)
  for (let i = 0; i < limit; i++) {
      obj.top2.push(songs[i].id)
  }
  return obj
}