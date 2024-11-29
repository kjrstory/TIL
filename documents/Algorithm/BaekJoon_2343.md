# BaekJoon 2343번 문제 - 기타 레슨

* 문제: [백준 2343](https://www.acmicpc.net/problem/2343)  
* 난이도: Silver 1  
* 날짜: 2024-11-19

## 문제 요약

- 강의들을 블루레이에 나누어 담을 때, 블루레이의 최소 크기를 구하는 문제.
- **조건**: 
  - 모든 강의는 순서대로 담겨야 함.
  - 블루레이 개수는 정확히 \( m \)이어야 함.

---

## 풀이 방법 및 배워야 할 것:

1. **이진 탐색**:
   - 블루레이의 크기 \( mid \)를 기준으로 가능한지 검증.
   - 가능한 경우 더 작은 \( mid \)를 탐색, 불가능한 경우 \( mid \)를 증가.
2. **누적합 활용**:
   - \( \text{sum\_prefix} \) 배열을 사용해 부분합을 빠르게 계산.

---

## 풀이 코드:

### C++ 코드

```cpp
#include <iostream>

using namespace std;

int sum_prefix[1000001];
int n, m;

bool isValid(int mid) {
    int count = 1;
    int prev = 0;
    for (int i = 1; i <= n; i++) {
        if (sum_prefix[i] - sum_prefix[prev] > mid) {
            count++;
            prev = i - 1;  // 이전 블루레이 끝
        }
        if (count > m) {
            return false;
        }
    }
    return true;
}

int main() {
    cin >> n >> m;
    int left = -1, right;
    for (int i = 0; i < n; i++) {
        int tmp;
        cin >> tmp;
        sum_prefix[i + 1] = sum_prefix[i] + tmp;
        left = max(left, tmp);
    }
    right = sum_prefix[n];

    int answer = 0;
    while (left <= right) {
        int middle = (left + right) / 2;
        if (isValid(middle)) {
            answer = middle;
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    cout << answer;
    return 0;
}
```

---

### Python 코드

```python
n, m = map(int, input().split())
bluerays = list(map(int, input().split()))
sum_prefix = [0] * (n + 1)
for i in range(1, n + 1):
    sum_prefix[i] = sum_prefix[i - 1] + bluerays[i - 1]

left = max(bluerays)
right = sum_prefix[n]
answer = 0

def isValid(mid):
    count = 1
    prev = 0
    for i in range(1, n + 1):
        if sum_prefix[i] - sum_prefix[prev] > mid:
            count += 1
            prev = i - 1
        if count > m:
            return False
    return True

while left <= right:
    mid = (left + right) // 2
    if isValid(mid):
        answer = mid
        right = mid - 1
    else:
        left = mid + 1

print(answer)
```

---

## 배운 점

1. **이진 탐색과 검증 함수**:
   - 이진 탐색을 통해 블루레이 크기의 최적 값을 찾는 문제를 해결.
   - **isValid** 함수로 주어진 블루레이 크기가 유효한지 검증.
2. **누적합 사용**:
   - \( \text{sum\_prefix} \) 배열을 통해 부분합 계산을 효율적으로 수행.
3. **최소 값 설정**:
   - 블루레이 크기의 최소값은 강의 중 가장 긴 길이, 최대값은 모든 강의의 총합.

