# BaekJoon 3036 링


[문제 출처](https://www.acmicpc.net/problem/3036)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 3 해결일 : 2022-03-02
  * 유클리드 호제법


- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int Euclidean(int a, int b)
{
	int r = a % b;
	if (r ==0){
		return b;
	}
	return Euclidean(b, r);
}

int main (void) {
	int N;
	cin >> N;
	int a[N];
	for (int i=0; i<N ; i++){
		cin >> a[i];
	}
	for (int i=1; i<N ; i++){
		int gcd=Euclidean(a[0],a[i]);		
		cout << a[0]/gcd << "/" << a[i]/gcd << "\n";
	}
	
	return 0;
}
```
