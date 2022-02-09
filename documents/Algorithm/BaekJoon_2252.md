# BaekJoon 2252 줄세우기

[문제 출처](https://www.acmicpc.net/problem/2252)  

- 풀이 방법 및 배워야할 것: 

  위상 정렬 기본 문제  
  동빈나 알고리즘강좌([블로그](https://blog.naver.com/ndb796/221236874984), [유튜브](https://www.youtube.com/watch?v=qzfeVeajuyc))를 토대로 작성  
  응용하기 위해 많은 연습 필요  

- 풀이 코드 :
```cpp
#include <iostream>
#include <vector>
#include <queue>
#define MAX 32001

using namespace std;

int n, inDegree[MAX];
vector<int> a[MAX];

void topologySort() {
	int result[MAX];
	queue<int> q;
	for (int i = 1; i <=n;i++){
		if(inDegree[i] == 0) q.push(i);
	}
	
	for(int i = 1; i<=n; i++){
		
		if(q.empty()) {
			return;
		}
		int x = q.front();
		q.pop();
		result[i]= x;
		
		for(int i=0; i<a[x].size();i++){
			int y = a[x][i];
			if(--inDegree[y] == 0)
				q.push(y);
		}
	}
	for (int i=1;i<=n;i++) {
		cout << result[i] << " ";
	}
	
}

int main(void){
	
		
	cin.tie(0);
    ios_base::sync_with_stdio(0);
	
	int N, M;
	
	cin >> N >> M;
	for (int i=0;i<M;i++){
		int tmp1, tmp2;
		cin >> tmp1 >> tmp2;
		a[tmp1].push_back(tmp2);
		inDegree[tmp2]++;
		
	}
	n=N;
	topologySort();
}
```
