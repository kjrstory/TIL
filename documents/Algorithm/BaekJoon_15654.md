## BaekJoon 15654 N과 M (5)

[문제 출처](https://www.acmicpc.net/problem/15654)  

### 풀이 방법 및 배워야할 것: 

   *  15645문제와 거의 유사하나 숫자리스트를 입력으로 받는 부분만 달라짐.
   *  난이도: Silver 3
   *  푼 날짜 2024-02-02
     
### 풀이 코드 :

#### C++
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, m;
int a[9] = {0,};
bool visited[9] = {0,};
vector <int> v;
void dfs(int cnt)
{
    if(cnt == m)
    {
        for(int i = 0; i < m; i++)
            cout << a[i] << ' ';
        cout << '\n';
        return;
    }
    for(int i = 0; i < v.size(); i++)
    {
        if(!visited[i])
        {
            visited[i] = true;
            a[cnt] = v[i];
            dfs(cnt+1);
            visited[i] = false;
        }
    }
}

int main() {
    cin >> n >> m;
	int tmp;
	for (int i=0; i< n; i++){
		cin >> tmp;
		v.push_back(tmp);
	}
	sort(v.begin(), v.end());

    dfs(0);
}

```

#### Python
```python
def dfs(cnt):
    if cnt == m:
        print(' '.join(map(str, s)))
        return
    for i in range(n):
        if visited[i]:
            continue
        visited[i] = True
        s.append(a[i])
        dfs(cnt+1)
        s.pop()
        visited[i] = False


n, m = map(int, input().split())
a = list(map(int, input().split()))

a.sort()
s = []
visited = [False] * n
dfs(0)
```
