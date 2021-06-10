**문제설명**

전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

- 구조대 : 119
- 박준영 : 97 674 223
- 지영석 : 11 9552 4421

전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

**제한사항**

- phone_book의 길이는 1 이상 1,000,000 이하입니다.
  - 각 전화번호의 길이는 1 이상 20 이하입니다.
  - 같은 전화번호가 중복해서 들어있지 않습니다.


**입출력 예**<br/>
|phone_book|return|
|-|-|
|["119", "97674223", "1195524421"]|false|
|["123","456","789"]|true|
|["12","123","1235","567","88"]|false|

<br/>

**입출력 예에 대한 설명**<br/>

입출력 예 #1   
앞에서 설명한 예와 같습니다.

입출력 예 #2   
한 번호가 다른 번호의 접두사인 경우가 없으므로, 답은 true입니다.

입출력 예 #3   
첫 번째 전화번호, “12”가 두 번째 전화번호 “123”의 접두사입니다. 따라서 답은 false입니다.
<hr/>

**문제풀이**<br/>

해시를 이용하는 문제이기 때문에 `clothes`를 키로 가지는 `hash`를 만들어 줍니다.

위에서 만든 `hash`를 이용해서 `clothes` 원소의 접두어가 다른 `clothes` 원소로 되어 있는지 확인합니다.

```
for (let i = 0; i < clothes.length; i++) {
  let temp = '';
  for (let j = 0; j < cloth.length; j++) {
    temp += cloth[j]
    if (hash에 temp를 키를 가지는 값이 있는지? && temp가 cloth가 아닌지) {
      answer = false;
      return answer;
    }
  }
} 
```
위의 수도 코드처럼 접두어로 가지는지 확인하기 위해 `temp`를 선언하고 `clothes`의 특정 원소에서 한 글자씩 더한 후 그 값이 `hash`에 있는지 확인합니다. 만약 그 값이 현재 시점의 `clothes`의 특정 원소가 아니라면 `false`를 반환합니다.

해시를 사용하지 않고 아래와 같이 간단히 풀 수도 있습니다.
```python
def solution (phone_book) :
    phone_book.sort()
    for i in range(len(phone_book)-1) :
        if phone_book[i] == phone_book[i+1][:len(phone_book[i])] :
            return False
    return True
```