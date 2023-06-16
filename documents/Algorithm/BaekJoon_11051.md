# BaekJoon 11051 이항 계수 2

[문제 출처](https://www.acmicpc.net/problem/11051)  

* 풀이 방법 및 배워야할 것: 

  * Silver 2
  * 2022-12-31
  * 이항 계수, 수학의 조합, 다이나믹 프로그래밍

- 풀이 코드 :

```cpp
#include <iostream>

using namespace std;
int d[1001][1001];

int dp(int n, int k){
	if (k==0){
		return 1;
	}
	if (k==1){
		return n;
	}
	if (n==k){
		return 1;
	}
	if (d[n][k]!=0){
		return d[n][k];
	}

	return d[n][k]=(dp(n-1,k-1)+dp(n-1,k))%10007;

}
int main(void){
	int N, K;
	cin >> N >> K;
	cout << dp(N, K) % 10007 << "\n";
}
```
