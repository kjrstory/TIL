# BaekJoon 2480 주사위 세 개 

[문제 출처](https://www.acmicpc.net/problem/2480)  

* 풀이 방법 및 배워야할 것: 


  * 난이도: Bronze 4


- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;


int main(void){
	
	int a,b,c;
	
	cin >> a >> b >> c;
	
	if (a==b and b==c) {
		cout << 10000+a*1000 << "\n";
	}
	else if (a==b or b==c) {
		cout << 1000+b*100 <<"\n";
	}
	else if (a==c) {
		cout << 1000+a*100 <<"\n";
	}
	else {
		int max=0;
		
		if ( a> max) max=a;
		if ( b> max) max=b;
		if ( c> max) max=c;
		
		cout << max*100 << "\n";
		
	}
	
	return 0;
}
```
