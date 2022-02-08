# BaekJoon 2178 미로탐색

[문제 출처](https://www.acmicpc.net/problem/2178) 

- 풀이 방법 :  
  BFS로 탐색하면서 최단거리를 계산하는 배열을 갱신해야 함 
    

- 풀이 코드 : 
```cpp
#include <iostream>
#include <queue>
#include <vector>
#include <algorithm>

using namespace std;

int number = 1000;
int c[101][101];
int dis[101][101];
vector<pair<int, int>> a[101][101];
int cnt=0;

void bfs(int x, int y){
	queue<pair<int, int>> q;
	q.push(make_pair(x,y));
	c[x][y] = true ;
	dis[x][y]= 1; 
	while(!q.empty()){
		int ii = q.front().first;
		int jj = q.front().second;
		q.pop();
		//cout << ii << " " << jj << "\n";
		cnt ++;
		for (int i=0;i<a[ii][jj].size();i++){
			int newx=a[ii][jj][i].first;
			int newy=a[ii][jj][i].second;
			if(!c[newx][newy]){
				q.push(make_pair(newx,newy));
				c[newx][newy] = true;
				dis[newx][newy]=dis[ii][jj]+1;
			}
		}
	}
}

int main(void){
	
	cin.tie(0);
    ios_base::sync_with_stdio(0);
	
    int N, M;
	
	cin >> N >> M;
	
	string tmp1;
	
	int cn[101][101];
	
	for (int i=1;i<=N;i++){
		cin >> tmp1 ;
		for (int j=1;j<=M;j++){
			cn[i][j]=tmp1[j-1]-'0';
		}
	}
	
	for (int i=1;i<=N;i++){
		for (int j=1;j<=M;j++){
			if(cn[i][j]==1 and i+1<=N){
				if(cn[i+1][j]==1){
					a[i][j].push_back(make_pair(i+1,j));
					a[i+1][j].push_back(make_pair(i,j));
				}
			}
			if	(cn[i][j]==1 and j+1<=M){
				if(cn[i][j+1]==1){
					a[i][j].push_back(make_pair(i,j+1));
					a[i][j+1].push_back(make_pair(i,j));
					
				}
			}
		}
	}
	
	bfs(1,1);
	cout << dis[N][M] << "\n";
	
	return 0;
}
```



