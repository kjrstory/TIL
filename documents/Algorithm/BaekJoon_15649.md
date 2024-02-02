## BaekJoon 15649 N과 M (1)

[문제 출처](https://www.acmicpc.net/problem/15649)  

### 풀이 방법 및 배워야할 것: 

   *  백트래킹 기본 문제, 이 문제부터 비슷한 문제가 계속 이어짐
   *  난이도: Silver 3
   *  푼 날짜 2024-02-02
     
### 풀이 코드 :

#### C++
```cpp
#include <iostream>

using namespace std;

int n, m;
int a[9] = {0,};
bool visited[9] = {0,};

void dfs(int cnt)
{
    if(cnt == m)
    {
        for(int i = 0; i < m; i++)
            cout << a[i] << ' ';
        cout << '\n';
        return;
    }
    for(int i = 1; i <= n; i++)
    {
        if(!visited[i])
        {
            visited[i] = true;
            a[cnt] = i;
            dfs(cnt+1);
            visited[i] = false;
        }
    }
}

int main() {
    cin >> n >> m;
    dfs(0);
}
```

#### Python
```python
def dfs():
    if len(s) == m:
        print(' '.join(map(str, s)))
        return
    for i in range(1, n+1):
        if visited[i]:
            continue
        visited[i] = True
        s.append(i)
        dfs()
        s.pop()
        visited[i] = False


n, m = map(int, input().split())

s = []
visited = [False] * (n+1)
dfs()
```
