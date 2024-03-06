## BaekJoon 11724 연결 요소의 개수

[문제 출처](https://www.acmicpc.net/problem/11724)  

### 풀이 방법 및 배워야할 것: 

   *  BFS나 DFS로 가능한 문제
   *  파이썬에서는 재귀 깊이 설정 `sys.setrecursionlimit(10**6)`을 해야 함. 백준 사이트의 도움말 중 [런타임에러(재귀에러)](https://help.acmicpc.net/judge/rte/RecursionError)를 참고
   *  파이썬에 입력의 오버헤드를 줄이기 위해 `input = sys.stdin.readline`가 필요
   *  난이도: Silver 2
   *  푼 날짜 2024-03-06

### 풀이 코드 :

#### C++
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> graph[1001];
bool visited[1001];

void dfs(int index){
	visited[index] = true;
	for(auto& neighbor : graph[index]){
		if (visited[neighbor]) continue;
		dfs(neighbor);
	}
}
		
int main(){
	int N, M;
	cin >> N >> M ;
	int u, v;
	
	for (int i=0; i<M;i++){
		cin >> u >> v;
		graph[u].push_back(v);	
		graph[v].push_back(u);
	}

	int answer = 0 ;
	for (int i=1; i<=N;i++){
		if (visited[i]) continue;
		dfs(i);
		answer++;
	}
	
	cout << answer;
	return 0;
}

```

```python
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

N, M = map(int, input().split())
graph = [[] for _ in range(N+1)]
visited = [False] * (N+1)

for _ in range(M):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)


def dfs(index):
    visited[index] = True
    for i in graph[index]:
        if not visited[i]:
            dfs(i)


answer = 0
for i in range(1, N + 1):
    if not visited[i]:
        dfs(i)
        answer += 1

print(answer)
```
