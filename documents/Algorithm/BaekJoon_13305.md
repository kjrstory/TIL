# BaekJoon 13305 주유소


[문제 출처](https://www.acmicpc.net/problem/13305)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 4 해결일 : 2022-02-28


- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int main (void){
	int N;
	cin >> N;
	long long road[N-1];
	for (int i=0; i<N-1; i++){
		cin >> road[i];
	}
	long long value[N];
	for (int i=0; i<N; i++){
		cin >> value[i];
	}
	long long sum=0;
	long long now=value[0];
	for (int i=0; i<N-1; i++){
		if (i==0) sum+=now*road[0];
		else{
			if (value[i]<now){
				now=value[i];
				sum+=now*road[i];
			}
			else{
				sum+=now*road[i];
			}
		}
		
		//cout << i << " " << now << " "  << sum << "\n";
	}
	
	cout << sum ;
	return 0;
}
```
