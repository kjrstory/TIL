# BaekJoon 11047 동전 0


[문제 출처](https://www.acmicpc.net/problem/11047)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 3해결일 : 2022-02-22


- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int main(void){
	
	int N, K;
	cin >> N >> K;
	int a[N];
	
	for (int i=0;i<N;i++){
		cin >> a[i];
	}
	
	int cnt=0;
	int now=N-1;
	while(K>0){
		if(K==0) break;
		cnt += K / a[now];
		K = K % a[now];
		//cout << cnt << " " << K << " " << a[now] << " " << now << "\n";
		now--;
	}
	
	cout << cnt;
	
	return 0;
}
```
