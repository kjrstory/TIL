# BaekJoon 1068번 문제 - 트리

* 문제: [BaekJoon 1968](https://www.acmicpc.net/problem/1068)  
* 난이도: Gold 5  
* 날짜: 2024-11-29  

## 문제 요약

주어진 트리에서 특정 노드를 삭제했을 때 남아있는 리프 노드의 개수를 구하는 문제입니다.

**입력**  
- 첫째 줄: 트리의 노드 개수 \( N \) (\(1 \leq N \leq 50\))  
- 둘째 줄: 부모 노드를 나타내는 배열 (\(-1\)은 루트 노드를 의미)  
- 셋째 줄: 삭제할 노드 번호  

**출력**  
- 남아있는 리프 노드의 개수  

## 풀이 방법 및 배워야 할 것:

1. **재귀 함수**: 서브트리 삭제를 위해 `deleteSubtree` 함수를 구현.
2. **리프 노드 판단**:
   - 삭제된 노드가 아닌 노드 중, 다른 노드의 부모가 아닌 노드를 리프 노드로 판단.
3. **배열 초기화**:
   - 삭제된 노드는 \(-2\)로 설정하여 트리에서 제거.

## 풀이 코드:

### Python
```python
N = int(input())
parent = list(map(int, input().split()))
deleteNode = int(input())
isParent = [False] * (N + 1)

def deleteSubtree(node):
    parent[node] = -2  # 삭제된 노드 표시
    for i in range(N):
        if parent[i] == node:
            deleteSubtree(i)  # 서브트리 삭제

# 삭제 노드 처리
deleteSubtree(deleteNode)

# 리프 노드 판단
for i in range(N):
    if parent[i] >= 0:
        isParent[parent[i]] = True

leafCount = 0
for i in range(N):
    if parent[i] != -2 and not isParent[i]:
        leafCount += 1

print(leafCount)
```

### C++
```cpp
#include <iostream>
using namespace std;

int parent[51] = {0,};  // 부모 노드 정보
bool isParent[51] = {false,};  // 부모 여부 확인
int N;

void deleteSubtree(int node) {
    parent[node] = -2;  // 삭제된 노드 표시
    for (int i = 0; i < N; i++) {
        if (parent[i] == node) {
            deleteSubtree(i);  // 서브트리 삭제
        }
    }
}

int main() {
    cin >> N;
    int root = -1;
    int deleteNode;

    // 부모 노드 입력
    for (int i = 0; i < N; i++) {
        cin >> parent[i];
        if (parent[i] == -1) root = i;  // 루트 노드 찾기
    }

    cin >> deleteNode;

    // 삭제 노드 처리
    deleteSubtree(deleteNode);

    // 리프 노드 판단
    for (int i = 0; i < N; i++) {
        if (parent[i] >= 0) {
            isParent[parent[i]] = true;
        }
    }

    int leafCount = 0;
    for (int i = 0; i < N; i++) {
        if (parent[i] != -2 && !isParent[i]) {
            leafCount++;
        }
    }

    cout << leafCount;
    return 0;
}
```
