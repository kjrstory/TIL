## BaekJoon 14500 테트로미노

[문제 출처](https://www.acmicpc.net/problem/14500)  

### 풀이 방법 및 배워야할 것: 

   *  난이도: Gold 4
   *  푼 날짜 2024-03-10
   * 브루트 포스 알고리즘, dfs로 가능한데 T자 블록은 dfs로 되지 않으므로 별도로 예외 처리해야 함
     
### 풀이 코드 :

#### C++
```cpp
#include <iostream>
#include <algorithm>

using namespace std;

int arr[500][500];
bool visited[500][500];
int answer=0;
int N, M;
int dx[4]= {1, -1, 0, 0};
int dy[4]= {0, 0, 1, -1};

void dfs(int x, int y, int cnt, int sum){
    if (cnt==4){
        if (sum > answer) answer = sum;
        return;
    }

    for (int i=0;i<4;i++){
        int nx = x + dx[i];
        int ny = y + dy[i];
        if (nx<0 || ny<0 || nx>=N || ny==M) continue;
        if (visited[nx][ny]) continue;

        visited[nx][ny] = true;
        dfs(nx, ny, cnt+1, sum+arr[nx][ny]);
        visited[nx][ny] = false;
    }
}

void checkTShape(int x, int y){
    if(x-1 >= 0 && y-1 >= 0 && x+1 < N) { //ㅓ
        answer = max(answer, (arr[x-1][y] + arr[x][y-1] + arr[x][y] + arr[x+1][y]));
    }
    if(x-1 >= 0 && y+1 < M && x+1 < N) { //ㅏ
        answer = max(answer, (arr[x-1][y] + arr[x][y+1] + arr[x][y] + arr[x+1][y]));
    }
    if(y-1 >= 0 && y+1 < M && x+1 < N) { //ㅗ
        answer = max(answer, (arr[x][y] + arr[x+1][y] + arr[x+1][y-1] + arr[x+1][y+1]));
    }
    if(y-1 >= 0 && y+1 < M && x+1 < N) { //ㅜ
        answer = max(answer, (arr[x][y-1] + arr[x][y] + arr[x][y+1] + arr[x+1][y]));
    }
}
int main (){
    
    cin >> N >> M;

    for (int i=0; i<N;i++){
        for (int j=0;j<M;j++){
            cin >> arr[i][j];
        }
    }
    
    for (int i=0; i<N;i++){
        for (int j=0;j<M;j++){
            visited[i][j] = true;
            dfs(i, j , 1, arr[i][j]);
            visited[i][j] = false;
            checkTShape(i, j);
        }
    }
    cout << answer;
    return 0;
}

```

```python
N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
visited = [[False]* M for _ in range(N)]
answer = 0

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def dfs(x, y, cnt, sum):
    global answer
    if cnt == 4:
        answer = max(answer, sum)
        return
    for i in range(4):
        nx, ny = x + dx[i], y+ dy[i]
        if nx<0 or ny< 0 or nx>=N or ny>=M or visited[nx][ny]:
            continue

        visited[nx][ny]=True
        dfs(nx, ny, cnt+1, sum+arr[nx][ny])
        visited[nx][ny]=False

def checkTShape(x, y):
    global answer
    if x - 1 >= 0 and y - 1>=0 and x + 1 < N:
        answer = max(answer, arr[x - 1][y]+arr[x][y - 1]+arr[x][y]+arr[x + 1][y])
    if x - 1 >= 0 and y + 1 < M and x + 1 < N:
        answer = max(answer, arr[x - 1][y] + arr[x][y + 1] + arr[x][y] + arr[x + 1][y])
    if y - 1 >= 0 and y + 1 < M and x + 1 < N:
        answer = max(answer, arr[x][y] + arr[x + 1][y] + arr[x][y - 1] + arr[x][y + 1])
    if y - 1 >= 0 and y + 1 < M and x - 1 >= 0:
        answer = max(answer, arr[x][y - 1] + arr[x][y] + arr[x][y + 1] + arr[x - 1][y])


for i in range(N):
    for j in range(M):
        visited[i][j] = True
        dfs(i, j, 1, arr[i][j])
        visited[i][j] = False
        checkTShape(i, j)

print(answer)
```