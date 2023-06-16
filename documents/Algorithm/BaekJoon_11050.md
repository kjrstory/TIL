# BaekJoon 11050 이항계수


[문제 출처](https://www.acmicpc.net/problem/11050)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Bronze 1 해결일 : 2022-03-04
  * 수학의 조합 

- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int d[11];

int factorial(int a){
	
	if (a==1 or a==0){
		return 1;
	}
	if (d[a]!=0){
		return d[a];
	}
	return d[a]=a*factorial(a-1);
}

int main(void){
	int N, K;
	cin >> N >> K;
	//cout << factorial(0);
	cout << factorial(N)/(factorial(K)*factorial(N-K)) << "\n";
}
```
