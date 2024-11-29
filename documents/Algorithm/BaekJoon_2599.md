# BaekJoon 2559번 문제 - 수열

* 문제: [BaekJoon 2559](https://www.acmicpc.net/problem/2559)  
* 난이도: Silver 3  
* 날짜: 2024-11-29  

## 문제 요약

정수 배열이 주어질 때, K개의 연속된 원소의 합 중 최댓값을 구하는 문제입니다.

**입력**  
- 첫째 줄: 배열의 길이 \( N \)과 구간 길이 \( K \) (\(1 \leq K \leq N \leq 100,000\))  
- 둘째 줄: \( N \)개의 정수 배열 (\(-100 \leq \text{배열 원소} \leq 100\))  

**출력**  
- 최대 합  

## 풀이 방법 및 배워야 할 것:

1. **누적합(Prefix Sum)**: 누적합을 사용하여 구간합을 효율적으로 계산.
2. **최적화**:
   - Python: `list`와 반복문을 활용.
   - C++: 배열과 반복문 사용.

## 풀이 코드:

### Python
```python
N, K = map(int, input().split())
arr = list(map(int, input().split()))
psum = [0] * (N + 1)  # 누적합 배열 초기화

# 누적합 계산
for i in range(1, N + 1):
    psum[i] = psum[i - 1] + arr[i - 1]

max_sum = -100 * 100000 - 1  # 문제의 최솟값보다 작은 초기값
for i in range(N - K + 1):
    current_sum = psum[i + K] - psum[i]  # 구간합 계산
    max_sum = max(max_sum, current_sum)

print(max_sum)
```

### C++
```cpp
#include <iostream>

using namespace std;

int main() {
    int N, K;
    cin >> N >> K;
    int psum[100001] = {0};  // 누적합 배열 초기화

    // 누적합 계산
    for (int i = 1; i <= N; i++) {
        int tmp;
        cin >> tmp;
        psum[i] = psum[i - 1] + tmp;
    }

    long long answer = -100 * 100000 - 1;  // 문제의 최솟값보다 작은 초기값

    // K 길이의 구간합 계산
    for (int i = 0; i <= N - K; i++) {
        long long tmp;
        tmp = psum[i + K] - psum[i];  // 구간합 계산
        if (tmp > answer) {
            answer = tmp;
        }
    }
    cout << answer;
    return 0;
}
```
