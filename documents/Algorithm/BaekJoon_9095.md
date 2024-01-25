## BaekJoon 9095 1, 2, 3 더하기

[문제 출처](https://www.acmicpc.net/problem/9095)  

### 풀이 방법 및 배워야할 것: 

   *  동적계획법으로 풀거나 DFS를 이용한 브루트포스로도 풀 수 있는 문제
   *  난이도: Silver 3
   *  푼 날짜 2024-01-25
     
### 풀이 코드 :

#### C++
* 동적계획법(Dynamic Programming)
```cpp
#include <iostream>

using namespace std;

int dp[11];

int main(){
	int T, n;
	
	dp[1]=1;
	dp[2]=2;
	dp[3]=4;
	for (int i=4; i<=10;i++){
		dp[i] = dp[i-1] + dp[i-2] + dp[i-3];  
	}
	cin >> T;
	while (T--){
		cin >> n;
		cout << dp[n] << "\n";
	}
	return 0;
}

```
* 브루트포스(Brute Force)
```cpp
#include <iostream>

using namespace std;

int answer;

void dfs(int sum, int n) {
    
	if (sum == n) {
        answer++;
        return;
    }
    
	if (sum > n) {
        return;
    }
    
	dfs(sum + 1, n);
    dfs(sum + 2, n);
    dfs(sum + 3, n);
}

int main(){
	int T, n;
	
	cin >> T;
	while (T--){
		cin >> n;
		answer = 0;
        dfs(0, n);
        cout << answer << "\n";
	}
	return 0;
}

```
#### Python
* 동적계획법(Dynamic Programming)
```python
dp = [0] * 11
dp[1], dp[2], dp[3] = 1, 2, 4

for i in range(4, 11):
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

T = int(input())

for _ in range(T):
    n = int(input())
    print(dp[n])

```
* 브루트포스(Brute Force)
```python
def dfs(sum, n):
    global count
    if sum == n:
        count += 1
        return
    if sum > n:
        return

    dfs(sum + 1, n)
    dfs(sum + 2, n)
    dfs(sum + 3, n)


T = int(input())

for _ in range(T):
    n = int(input())
    count = 0
    dfs(0, n)
    print(count)

```
