## BaekJoon 18290 NM과 K (1)

[문제 출처](https://www.acmicpc.net/problem/18290)  

### 풀이 방법 및 배워야할 것: 

   * DFS, 브루트포스
   * DFS함수를 사용할 때 문제에서 요구하는 최대합을 인자로 함
   * DFS함수의 최적화를 위해 모든 경우의 수를 계산하지 않고 `i = x`, j = (i == x ? y : 0)`로 반복문의 범위를 줄임
   * 난이도: Silver 1
   * 푼 날짜 2024-03-08
     
### 풀이 코드 :

#### C++
```cpp
#include <iostream>

using namespace std;

int N, M, K;
int grid[11][11] = {0, };
bool visited[11][11] = {0, };
int maxSum = -10000*4;

int dx[4] = { -1, 0, 1, 0};
int dy[4] = { 0, 1, 0, -1};
void dfs(int x, int y, int cnt, int sum){
    
    if (cnt == K){
        
        if (sum>maxSum) {
            maxSum = sum;
        }
        return ;
    }
    
    for(int i = x; i < N; i++){
        for(int j = (i == x ? y : 0); j < M; j++){
            if (visited[i][j]) continue;
            bool flag = true;
            for (int d = 0; d < 4; d++){
                int xx= i+dx[d];
                int yy= j+dy[d];
                if (xx<0 || xx >=N || yy<0 || yy>=M) continue;
                if (visited[xx][yy]) flag = false;
            }
            if (flag) {
                visited[i][j] = true;
                dfs(i, j , cnt+1, sum + grid[i][j]);
                visited[i][j] = false;
            }    
        }
    }
}
		
int main(){

    cin >> N >> M >> K;

    for (int i=0; i<N;i++){
        for (int j=0;j<M;j++){
            cin >> grid[i][j];
        }
    }

    dfs(0, 0, 0, 0);

    cout << maxSum ;
    return 0;
}
```