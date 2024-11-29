# BaekJoon 2164 카드2

* 문제: [백준 2164](https://www.acmicpc.net/problem/2164)   
* 난이도: Silver 4  
* 날짜: 2024-11-12 


## 문제 요약

1부터 N까지의 번호가 적힌 카드를 큐에 넣은 후, 맨 위의 카드를 버리고 그 다음 카드를 큐의 맨 뒤로 옮기는 과정을 반복하여 마지막 남는 카드를 구하는 문제.

## 풀이 방법 및 배워야할 것:

   * C++: `std::queue`의 기본 사용법, 큐의 요소 삭제 및 순환 처리
   * Python: `collections.deque`의 기본 사용법, popleft()와 append()를 이용한 큐 조작

## 풀이 코드:

* C++

```cpp
#include <iostream>
#include <queue>

using namespace std;

int main(){
    int n;
    cin >> n;
    queue<int> q;

    for (int i = 1; i <= n; ++i) {
        q.push(i);
    }

    while(q.size() > 1) {
        q.pop(); // 맨 위 카드 제거
        if (q.size() == 1) {
            break;
        }
        int tmp = q.front();
        q.pop(); // 두 번째 카드를 꺼내어
        q.push(tmp); // 맨 뒤로 이동
    }
    cout << q.front(); // 마지막 남은 카드 출력
    return 0;
}
```

* Python

```python
from collections import deque

n = int(input())
d = deque()
for i in range(1, n + 1):
    d.append(i)

while len(d) > 1:
    d.popleft()  # 맨 위 카드 제거
    if len(d) == 1:
        break
    tmp = d.popleft()  # 두 번째 카드를 꺼내어
    d.append(tmp)  # 맨 뒤로 이동

print(d[0])  # 마지막 남은 카드 출력
```

