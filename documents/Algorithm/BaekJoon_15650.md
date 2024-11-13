# BaekJoon 15650번 문제 - N과 M (2)

* 문제: [백준 15650](https://www.acmicpc.net/problem/15650)  
* 난이도: Silver 3  
* 날짜: 2024-11-13  

## 문제 요약

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열을 모두 출력하는 문제.  
단, 고른 수열은 반드시 오름차순이어야 함.


## 풀이 방법 및 배워야 할 것:

   * **DFS**: 백트래킹을 사용해 모든 가능한 조합을 생성하고 조건에 맞는 조합만 출력.
   * **조합**: `itertools.combinations`를 사용하여 간단히 조합을 생성.
   * Python에서 `DFS`와 라이브러리 사용의 장단점 비교.

## 풀이 코드:

* DFS 풀이

```python
n, m = map(int, input().split())
a = [0] * 9  # 선택한 숫자를 저장할 배열
c = [False] * 9  # 방문 여부를 기록할 배열

def dfs(num, cnt):
    if cnt == m:  # M개의 숫자를 모두 선택한 경우
        print(' '.join(map(str, a[:m])))
        return
    for i in range(num, n + 1):
        if not c[i]:  # 숫자 i를 아직 선택하지 않은 경우
            c[i] = True
            a[cnt] = i  # 숫자 선택
            dfs(i + 1, cnt + 1)  # 다음 숫자를 선택
            c[i] = False  # 백트래킹

dfs(1, 0)
```

* 조합 사용 풀이

```python
from itertools import combinations

n, m = map(int, input().split())

# combinations을 사용해 조합 생성
for combination in combinations(range(1, n + 1), m):
    print(*combination)  # 조합 출력
```

---

## 배운 점
- **DFS와 백트래킹**: 오름차순 조건을 만족시키기 위해 `num`을 인자로 전달하며 재귀 호출하는 방식.
- **itertools.combinations**: 조합 문제를 간결하게 해결할 수 있는 Python의 강력한 라이브러리.
- 두 가지 방식의 장단점 비교:
  - DFS: 백트래킹 과정을 통해 문제의 로직을 깊이 이해 가능.
  - 조합: 간단한 구현으로 시간과 코드량 절약.

