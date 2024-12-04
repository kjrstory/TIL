# BaekJoon 14267번 문제 - 회사 문화 1

* 문제: [BaekJoon 14267](https://www.acmicpc.net/problem/14267)  
* 난이도: Gold 4  
* 날짜: 2024-11-29  

## 문제 요약

회사의 조직 구조와 칭찬의 정보가 주어질 때, 각 직원이 받는 칭찬의 총합을 구하는 문제입니다.  

**입력**  
1. 첫 번째 줄: 직원 수 \( n \) (\(1 \leq n \leq 100,000\))과 칭찬 정보 수 \( m \).  
2. 두 번째 줄: 조직도를 나타내는 배열 \( a \) (\(a[i]\)는 \(i\)번 직원의 상사, 루트 직원은 \(-1\)).  
3. 이후 \( m \)개의 줄: 칭찬 정보 \( (num, w) \), \(num\)번 직원에게 \(w\)만큼의 칭찬을 전달.  

**출력**  
- 각 직원이 받은 칭찬의 총합을 출력 (\(1\)번 직원부터 순서대로).  

## 풀이 방법 및 배워야 할 것:

1. **조직 구조 저장**:
   - 각 직원의 상사 정보를 이용해 자식 노드들을 저장. \( children \) 배열을 활용.
2. **DFS/스택 탐색**:
   - \( dfs \) 또는 스택을 사용해 모든 자식에게 칭찬을 전달.
   - 부모의 칭찬을 자식에게 더해 나가면서 누적 합 계산.
3. **시간 복잡도**:
   - 입력 및 탐색 과정이 \( O(n + m) \)로 구성되어 \( n, m \)이 커도 효율적으로 동작.
4. **데이터 구조**:
   - Python에서는 리스트를, C++에서는 `vector`를 사용해 자식 노드 리스트를 저장.
   - \( arr \) 배열을 사용해 각 직원의 칭찬 합계를 저장.

## 풀이 코드:

### Python
```python
n, m = map(int, input().split())
a = list(map(int, input().split()))
children = [[] for _ in range(n + 1)]
arr = [0] * (n + 1)

# 조직 구조 저장
for i in range(len(a)):
    if a[i] != -1:
        children[a[i]].append(i + 1)

# 칭찬 정보 저장
for _ in range(m):
    num, w = map(int, input().split())
    arr[num] += w

# DFS를 이용한 칭찬 전달
stack = [1]  # 루트 직원부터 시작
while stack:
    node = stack.pop()
    for child in children[node]:
        arr[child] += arr[node]  # 칭찬 누적 전달
        stack.append(child)

print(*arr[1:n + 1])
```

### C++
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> children[100001];
int arr[100001] = {0};

// DFS를 이용한 칭찬 전달
void dfs(int node) {
    for (int child : children[node]) {
        arr[child] += arr[node];
        dfs(child);
    }
}

int main() {
    int n, m;
    cin >> n >> m;

    // 조직 구조 저장
    for (int i = 1; i <= n; i++) {
        int tmp;
        cin >> tmp;
        if (tmp != -1) {
            children[tmp].push_back(i);
        }
    }

    // 칭찬 정보 저장
    for (int i = 0; i < m; i++) {
        int num, w;
        cin >> num >> w;
        arr[num] += w;
    }

    dfs(1);  // 루트 직원부터 시작

    // 결과 출력
    for (int i = 1; i <= n; i++) {
        cout << arr[i] << " ";
    }
}
```