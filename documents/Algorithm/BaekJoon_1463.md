# BaekJoon 1463 1로 만들기

[문제 출처](https://www.acmicpc.net/problem/1463)  

* 풀이 방법 및 배워야할 것: 

  * DP 다이나믹 프로그맹으로 해결  
  * 최솟값 구현하는 부분을 좀 더 간단하게 구현해야 겠다.   

- 풀이 코드 :
```cpp
#include <iostream>

int d[1000001];

using namespace std;

int dp(int x) {
	if(x == 1) return 0;
	if(x == 2) return 1;
	if(x == 3) return 1;
	
	if(d[x] !=0 ) return d[x];
	
	if (x % 3 ==0 and x % 2 ==0 ) {
		int min, max;
		d[x/3]=dp(x/3);
		d[x/2]=dp(x/2);
		d[x-1]=dp(x-1);
		if (d[x/3] <= d[x/2]) { 
			max = d[x/2]; min = d[x/3]; 
		} 
        else { 
			max = d[x/3]; min = d[x/2]; 
		} 
		if (d[x-1] > max) {
			max = d[x-1]; 
		}
		if (d[x-1] < min) {
			min = d[x-1];
		}
		return d[x]=min+1;
	}
	else if (x % 3 ==0) {
		d[x/3]=dp(x/3);
		d[x-1]=dp(x-1);
		if (d[x/3] <=d[x-1]) {
			return d[x]=d[x/3]+1;
		}
		else {
			return d[x]=d[x-1]+1;
		}
	}
	else if (x % 2 ==0) {
		d[x-1]=dp(x-1);
		d[x/2]=dp(x/2);
		if (d[x-1] <= d[x/2]) {
			return d[x]=d[x-1]+1;
		}
		else {
			return d[x]=d[x/2]+1;
		}
	}
	else {
		return d[x]=dp(x-1)+1;
	}
	
}

int main(void){
	int x;
	cin >> x;
	cout << dp(x);
}
```
