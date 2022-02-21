# BaekJoon 2525 오븐 시계

[문제 출처](https://www.acmicpc.net/problem/2525)  

* 풀이 방법 및 배워야할 것: 


  * 난이도: Bronze 4


- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int main(void){
	
	int A, B, C;
	cin >> A >> B;
	cin >> C;
	
	B=B+C;
	
	while(A>=24 or B>=60){
		
		if (B>=60){
			A=A+1;
			B=B-60;
		}
		if (A>=24){
			A=A-24;
		}
	}

	cout << A << " " << B ; 
	return 0;
}
```
