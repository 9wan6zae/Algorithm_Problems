**문제설명**

스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

|종류|이름|
|-|-|
|얼굴|동그란 안경, 검정 선글라스|
|상의|파란색 티셔츠|
|하의|청바지|
|겉옷|긴 코트|

스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

**제한사항**

- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
- 스파이는 하루에 최소 한 개의 의상은 입습니다.


**입출력 예**<br/>
|clothes|return|
|-|-|
|[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]|5|
|[["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]|3|

<br/>

**입출력 예에 대한 설명**<br/>

예제 #1

headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.
```
1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses
```
예제 #2

face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.
```
1. crow_mask
2. blue_sunglasses
3. smoky_makeup
```
<hr/>

**문제풀이**<br/>

객체를 이용해서 `clothes` 원소의 두 번째 값을 `key`로 가지는 `value`가 있는지 확인하고 있으면 그 `value`를 1 증가, 없으면 `value`를 1로 초기화합니다.

이 과정을 거치면 각 고유의 `key`마다의 `value`를 얻을 수 있게 되고 해당 `value`는 `clothes`애서 `key`별 개수가 됩니다. 이 `value`를 가지고 조합을 계산할 수 있습니다.

현재 `value`는 옷을 입을 수 있는 경우 밖에 없기 때문에 해당 `key`를 입지 않는 경우를 추가하기 위해 1을 더하고 각 `value`를 곱합니다.

그리고 1을 빼주는데, 그 이유는 옷을 하나도 입지 않는 경우를 제거하기 위해서 입니다.