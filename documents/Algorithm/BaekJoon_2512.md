# BaekJoon 2512번 문제 - 예산

* 문제: [백준 2512](https://www.acmicpc.net/problem/2512)  
* 난이도: Silver 2
* 날짜: 2024-11-13  

## 문제 요약

- 각 지방의 예산 요청이 주어질 때, 예산 총액을 초과하지 않도록 상한액을 설정
- 예산 상한액을 설정하여 요청 금액의 합이 최대한 M에 가깝게

## 풀이 방법 및 배워야 할 것:

- **이진 탐색**: 예산 상한액을 설정할 때, 범위를 좁혀가며 적절한 값을 탐색.

---

## 풀이 코드:

* **C++ 코드**

```cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

vector<int> requests;

int find_budget(int m) {
    int left = 1;
    int answer = 0;

    int maxValue = 0;
    for (int value : requests) {
        maxValue = max(maxValue, value); 
    }
    int right = maxValue;
    int mid;

    while (left <= right) {
        mid = (left + right) / 2;
        int sum_budget = 0;

        for (int req : requests) {
            sum_budget += min(mid, req); 
        }

        if (sum_budget <= m) {
            answer = mid;  
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
}

int main() {
    int n, m;

    cin >> n;
    for (int i = 0; i < n; ++i) {
        int tmp;
        cin >> tmp;
        requests.push_back(tmp);
    }
    cin >> m;

    int answer = find_budget(m);
    cout << answer;
}
```

* **Python 코드**

```python
n = int(input())
requests = list(map(int, input().split()))
m = int(input())

def find_budget(m):
    left = 1
    right = max(requests)
    answer = 0

    while left <= right:
        mid = (left + right) // 2
        sum_budget = sum(min(mid, req) for req in requests)

        if sum_budget <= m:
            answer = mid  # 가능한 상한액 저장
            left = mid + 1
        else:
            right = mid - 1
        
    return answer

answer = find_budget(m)
print(answer)
```
