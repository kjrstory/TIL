# BaekJoon 2609 최대공약수와 최대공배수

[문제 출처](https://www.acmicpc.net/problem/2609)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 5 해결일 : 2022-02-20
  * [유클리드 호제법](https://ko.wikipedia.org/wiki/유킬리드_호제법)을 안다면 바로 해결할 수 있는 문제
 


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
	
	int x, y;
	cin >> x >> y;
	int gcd=Euclidean(x,y);
	cout << gcd << "\n";  //최대공약수
	cout << x*y/gcd << "\n";  // 최소공배수
	return 0;
}
```
