# BaekJoon 5086 약수와 배수

[문제 출처](https://www.acmicpc.net/problem/5086)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Bronze 3 해결일 : 2022-02-17

- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int main(void){
	
	int x, y;
	
	while(x!=99 and y!=99){
		cin >> x  >>  y ;
		
		if (x==0 and y==0){
			break;
		}
		else if( x % y == 0){
			cout << "multiple\n";
		}
		else if( y % x == 0){
			cout << "factor\n";
		}
		else cout << "neither\n";
	}
	return 0;
	
}
```
