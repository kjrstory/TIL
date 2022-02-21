# BaekJoon 9663 N Queen

[문제 출처](https://www.acmicpc.net/problem/9663)  

* 풀이 방법 및 배워야할 것: 

  * DFS(깊이 우선 탐색) memoization 백트래킹  

  * 난이도: Gold 5, 해결날짜 : 2022-02-16
  
  * 백트래킹 문제 중 난이도가 있는 문제이다. 처음에는 2차원 memoization 배열에 Queen이 갈 수 있는 경로 여부에 대한 배열을 만들었는데 성공하지 못했다. 
    다른 [풀이](https://cryptosalamander.tistory.com/58)를 참고하니 memoization 배열을 1차원으로 만들고 queen의 위치를 저장하는 배열로 만들었다.
    memoization 배열을 bool 배열로 만드려는 생각밖에 못했는데 int 배열로 만들어 true/false외에 다른 정보도 입력이 가능한 것을 익혀야겠다. 
    위의 풀이를 그대로 복사할수는 없어서 2차원 배열을 만들되 Queen의 경로 대신 Queen의 위치만 저장하는 배열을 만들어 성공시켰다. 
    단 이렇게 만들 경우 시간이 꽤 걸려 시간 초과에 걸릴 위험이 있다. 


- 풀이 코드 :
```cpp
#include <iostream>
#include <vector>

using namespace std;

int c[16][16];
int number=0;
int N;

bool check(int x, int y){  //x가 행 y가 열
	
	int i;
	for(i = 1; i < x ;  i++)
        if(c[i][y] == true ) return false; // 같은 라인에 퀸이 있으면
    i=1; 
	while(x-i>=1 and y-i>=1 ) {   // 왼쪽 위
		if(c[x-i][y-i] == true ) return false; // 왼쪽위라인에  퀸이 있으면
		i++;
	} 
	i=1; 
	while(x-i>=1 and y+i<=N ) {   // 오른쪽 위
		if(c[x-i][y+i] == true ) return false; // 오른쪽위라인에  퀸이 있으면
		i++;
	} 
    return true;
}

void dfs(int x, int cnt){
	
	if(cnt == N)
    {
	    number++;
		return ;
    }
	
	x++;
	for(int j = 1; j<=N; j++){
		if (check(x,j)) {
			c[x][j] = true;
			dfs(x, cnt+1);
			c[x][j] = false;
		}
	}
		
}

int main(void){
	
	cin.tie(0);
    ios_base::sync_with_stdio(0);
	
    cin >> N;
	dfs(1, 0);
	cout << number << "\n" ;
	
	return 0;
	
}
```
