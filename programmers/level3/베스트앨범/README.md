**문제설명**

스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

**제한사항**

- genres[i]는 고유번호가 i인 노래의 장르입니다.
- plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
- genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
- 장르 종류는 100개 미만입니다.
- 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
- 모든 장르는 재생된 횟수가 다릅니다.


**입출력 예**<br/>
|genres|plays|return|
|-|-|-|
|["classic", "pop", "classic", "classic", "pop"]|[500, 600, 150, 800, 2500]|[4, 1, 3, 0]|

<br/>

**입출력 예에 대한 설명**<br/>

classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.

- 고유 번호 3: 800회 재생
- 고유 번호 0: 500회 재생
- 고유 번호 2: 150회 재생

pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

- 고유 번호 4: 2,500회 재생
- 고유 번호 1: 600회 재생

따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.
<hr/>

**문제풀이**<br/>

이 문제를 풀 때 고려할 점은 정렬을 어떻게 할 것이라고 생각했습니다. 문제에서 제시된 정렬은 아래의 3가지입니다.

1. 잔체 장르의 재생 순 정렬
2. 장르 내에서의 재생 순 정렬
3. 장르 내 재생 횟수가 같으면 고유 번호가 작은 순 정렬

그런데 3번의 정렬은 고려를 하지 않았는데 `id`가 랜덤으로 부여된 것이 아니고 배열 순서대로 부여되어 있기 때문에 정렬을 해도 같은 재생 수를 가지고 있는 것들의 순서는 변경되지 않을 것이기에 자동으로 3번의 정렬 기준은 적용된다고 생각했기 때문입니다.

코드는 아래와 같이 작성하였습니다.

```
function solution(genres, plays) {
  var answer = [];

  // 1
  const hash = {}
  
  for (let i = 0; i < genres.length; i++) {
      if (hash[genres[i]]) {
          hash[genres[i]].push({play: plays[i], id: i})
      } else {
          hash[genres[i]] = [{play: plays[i], id: i}]
      }
  }
  
  // 2
  let top2_by_genre = []
  
  for (let key in hash) {
      // 장르별 음악을 play 수로 정렬
      const songs = sort_songs(hash[key])
      
      // top2 구하기
      top2_by_genre.push(find_top_2(songs))
  }
  
  // 3
  top2_by_genre = sort_songs(top2_by_genre)
  
  for (let i = 0; i < top2_by_genre.length; i++) {
      for (let j = 0; j < top2_by_genre[i].top2.length; j++) {
          answer.push(top2_by_genre[i].top2[j])
      }
  }
  
  return answer;
}
```

1. 각 장르별로 키를 가지는 `hash`를 만들고 분류합니다.
2. 장르 내 음악을 `play` 수를 기준으로 내림차순 정렬하고, 상위 2곡을 고릅니다.
3. 고른 각 장르별 상위 2곡이 있는 배열을 `play` 수를 기준으로 내림차순 정렬하고 각 곡의 `id`를 `answer`에 넣어줍니다.