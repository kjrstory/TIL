# BaekJoon 1934 최소공배수


[문제 출처](https://www.acmicpc.net/problem/1934)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 5 해결일 : 2022-03-01
  * 유클리드 호제법


- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int Euclidean(int a, int b)
{
    int r = a % b;
    if (r == 0) {
      return b;
    }
    return Euclidean(b, r);
}

int main (void) {
	int N;
	cin >> N;
	
	for (int i=0; i<N ; i++){
		int x, y;
		cin >> x >> y;
		int gcd=Euclidean(x,y);
		//cout << gcd << "\n";  //최대공약수
		cout << x*y/gcd << "\n";  // 최소공배수	
	}
	
	return 0;
}
```
