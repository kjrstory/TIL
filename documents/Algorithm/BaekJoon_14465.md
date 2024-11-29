# BaekJoon 14465번 문제 - 소가 길을 건너간 이유 5

* 문제: [BaekJoon 14465](https://www.acmicpc.net/problem/14465)  
* 난이도: Silver 2  
* 날짜: 2024-11-29  

## 문제 요약

N개의 신호등이 일렬로 배치되어 있고, 일부 신호등이 고장난 상태입니다. 길이가 K인 구간에서 고장난 신호등의 수를 최소화하기 위해 고쳐야 할 신호등의 최소 개수를 구하는 문제입니다.

**입력**  
- 첫째 줄: 신호등의 개수 \( N \), 연속된 구간 길이 \( K \), 고장난 신호등의 개수 \( B \)  
- 둘째 줄부터 \( B \)개의 줄: 고장난 신호등의 위치 (1부터 시작하는 인덱스)  

**출력**  
- 길이 \( K \)의 구간에 있는 고장난 신호등의 최소 개수  

## 풀이 방법 및 배워야 할 것:

1. **누적합(Prefix Sum)**: 고장난 신호등의 누적합을 계산하여 효율적으로 구간 내 고장난 신호등의 개수를 구할 수 있다.
2. **최적화**:
   - Python: 리스트를 사용하여 고장난 신호등을 표시하고 누적합으로 최소값 계산.
   - C++: 배열을 활용해 동일한 방식으로 처리.

## 풀이 코드:

### Python
```python
N, K, B = map(int, input().split())
arr = [0] * (N + 1)
psum = [0] * (N + 1)

# 고장난 신호등 표시
for _ in range(B):
    arr[int(input())] = 1

# 누적합 계산
for i in range(1, N + 1):
    psum[i] = psum[i - 1] + arr[i]

answer = 100001  # 최소값 초기화
# 길이 K의 구간 내 고장난 신호등 개수 계산
for i in range(N - K + 1):
    answer = min(answer, psum[i + K] - psum[i])

print(answer)
```

### C++
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[100004] = {0,};
    int psum[100004] = {0,};
    int N, K, B;
    cin >> N >> K >> B;
    
    // 고장난 신호등 입력
    for (int i = 0; i < B; i++) {
        int tmp;
        cin >> tmp;
        arr[tmp] = 1;
    }
    
    // 누적합 계산
    for (int i = 1; i <= N; i++) {
        psum[i] = psum[i - 1] + arr[i];
    }
    
    int answer = 100001;  // 최소값 초기화
    // 길이 K의 구간 내 고장난 신호등 개수 계산
    for (int i = 0; i <= N - K; i++) {
        answer = min(answer, psum[i + K] - psum[i]);
    }
    
    cout << answer << endl;
    return 0;
}
```

