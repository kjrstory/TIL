## BaekJoon 최솟값 만들기

[문제 출처](https://school.programmers.co.kr/learn/courses/30/lessons/12941)  

### 풀이 방법 및 배워야할 것: 

모든 경우의 수를 푸는 문제가 아니라 두 벡터의 내적을 구하는 문제이다.
반복문으로 내적을 구현할 수도 있고 C++에서는  <numeric>, 파이썬에서는 numpy 라이브러리를 이용하여 함수를 바로 사용할 수 도 있다.
오름차순, 내림차순 정렬, 내적 함수 사용 방법 숙달 필요

*  푼 날짜 2024-06-17
     
### 풀이 코드 :

#### C++

* 반복문을 통한 구현
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int solution(vector<int> A, vector<int> B)
{
    int answer = 0;

    sort(A.begin(), A.end());
    sort(B.begin(), B.end(), greater<int>());
    
    for (int i = 0 ; i<A.size();i++){
        answer += A[i]*B[i];
    }
    
    return answer;
}
```

* inner_product 함수를 통한 구현
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int solution(vector<int> A, vector<int> B)
{
    int answer = 0;

    sort(A.begin(), A.end());
    sort(B.begin(), B.end(), greater<int>());
    return inner_product(A.begin(),A.end(),B.begin(),0);
}
```

#### Python
* 반복문을 통한 구현
```python
def solution(A,B):
    result = 0 
    A.sort()
    B.sort(reverse = True)
    for i, j in zip (A, B) :
        result += i * j

    return result
```

* numpy dot 함수를 통한 구현
```python
import numpy as np

def solution(A,B):
    A = np.array(A)
    B = np.array(B)
    return int(np.dot(np.sort(A), np.sort(B)[::-1]))
```